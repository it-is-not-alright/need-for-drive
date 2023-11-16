import './style.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formatPrice } from '~/format/price';
import orderDetailsSelector from '~/store/orderDetails/selectors';
import { setCurrentStage, setReachedStage } from '~/store/orderDetails/slice';
import { AppDispatch } from '~/store/root';
import { IService } from '~/store/types';

import { placeholder } from './constants';
import OrderInfoOption from './OrderInfoOption/OrderInfoOption';
import { OrderInfoProps } from './types';

function OrderInfo({ btnLabel }: OrderInfoProps) {
  const {
    currentStage,
    reachedStage,
    city,
    point,
    car,
    color,
    date,
    rate,
    services,
  } = useSelector(orderDetailsSelector);
  const dispatch = useDispatch<AppDispatch>();

  function nextBtnIsDisabled(): boolean {
    switch (currentStage) {
      case 0:
        return point === null;
      case 1:
        return car == null;
      case 2:
        return rate == null;
      default:
        return false;
    }
  }

  const handleNextBtnClick = (): void => {
    if (currentStage < 3) {
      dispatch(setCurrentStage(currentStage + 1));
      dispatch(setReachedStage(currentStage + 1));
    }
  };

  function formatDateRange(): string {
    const dateFrom = new Date(date.from).getTime();
    const dateTo = new Date(date.to).getTime();
    let delta = Math.abs(dateTo - dateFrom) / 1000;
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;
    const hours = Math.ceil(delta / 3600) % 24;
    delta -= hours * 3600;
    return `${days}д ${hours}ч`;
  }

  function calculatePrice(): string {
    if (rate !== null) {
      const dateFrom = new Date(date.from).getTime();
      const dateTo = new Date(date.to).getTime();
      const delta = Math.abs(dateTo - dateFrom) / 1000;
      const days = Math.ceil(delta / 86400);
      const timePrice = Math.round(days / rate.days) * rate.price;
      const servicesPrice = services.reduce((accumulator, service) => {
        return accumulator + service.price;
      }, 0);
      return formatPrice(car.priceMin + timePrice + servicesPrice, true);
    }
    if (car !== null) {
      const min = formatPrice(car.priceMin, true);
      const max = formatPrice(car.priceMax, true);
      return `от ${min} до ${max}`;
    }
    return placeholder;
  }

  return (
    <div id="order-info">
      <p className="dark-text fw-500 ta-right fs-3">Ваш заказ:</p>
      <div id="order-info__options">
        <OrderInfoOption
          name="Пункт выдачи"
          value={`${city?.name || placeholder},\n${
            point?.address || placeholder
          }`}
        />
        {reachedStage > 0 && (
          <OrderInfoOption name="Модель" value={car?.name || placeholder} />
        )}
        {reachedStage > 1 && (
          <>
            <OrderInfoOption name="Цвет" value={color?.label || placeholder} />
            <OrderInfoOption
              name="Длительность аренды"
              value={date ? formatDateRange() : placeholder}
            />
            <OrderInfoOption
              name="Тариф"
              value={rate?.rateTypeId.name || placeholder}
            />
            {services.map((service: IService) => (
              <OrderInfoOption
                name={service.name}
                value="Да"
                key={service.id}
              />
            ))}
          </>
        )}
      </div>
      <p className="dark-text fs-2">
        <span className="fw-500">Цена: </span>
        <span>{car ? calculatePrice() : placeholder}</span>
      </p>
      <button
        className="btn-large"
        type="button"
        onClick={handleNextBtnClick}
        disabled={nextBtnIsDisabled()}
      >
        {btnLabel}
      </button>
    </div>
  );
}

export default OrderInfo;
