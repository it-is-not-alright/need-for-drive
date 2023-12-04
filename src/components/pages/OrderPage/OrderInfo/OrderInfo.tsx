import './style.scss';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formatPrice } from '~/format/price';
import orderDetailsSelector from '~/store/orderDetails/selectors';
import { setCurrentStage, setReachedStage } from '~/store/orderDetails/slice';
import { AppDispatch } from '~/store/root';
import { IService } from '~/store/types';

import { placeholder } from './constants';
import OrderInfoOption from './OrderInfoOption/OrderInfoOption';
import PopUp from './PopUp/PopUp';
import { OrderInfoProps } from './types';

function OrderInfo({ btnLabel }: OrderInfoProps) {
  const details = useSelector(orderDetailsSelector);
  const [popUpVisible, setPopUpVisible] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  function nextBtnIsDisabled(): boolean {
    switch (details.currentStage) {
      case 0:
        return details.point === null;
      case 1:
        return details.car == null;
      case 2:
        return details.rate == null;
      default:
        return false;
    }
  }

  const handleNextBtnClick = (): void => {
    if (details.currentStage < 3) {
      dispatch(setCurrentStage(details.currentStage + 1));
      dispatch(setReachedStage(details.currentStage + 1));
    }
    if (details.currentStage === 3) {
      setPopUpVisible(true);
    }
  };

  function calculatePrice(): string {
    if (details.rate !== null) {
      const days = details.date.days + (details.date.hours === 0 ? 0 : 1);
      const timePrice =
        Math.ceil(days / details.rate.days) * details.rate.price;
      const servicesPrice = details.services.reduce((accumulator, service) => {
        return accumulator + service.price;
      }, 0);
      return formatPrice(
        details.car.priceMin + timePrice + servicesPrice,
        true,
      );
    }
    if (details.car !== null) {
      const min = formatPrice(details.car.priceMin, true);
      const max = formatPrice(details.car.priceMax, true);
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
          value={`${details.city?.name || placeholder},\n${
            details.point?.address || placeholder
          }`}
        />
        {details.reachedStage > 0 && (
          <OrderInfoOption
            name="Модель"
            value={details.car?.name || placeholder}
          />
        )}
        {details.reachedStage > 1 && (
          <>
            <OrderInfoOption
              name="Цвет"
              value={details.color?.label || placeholder}
            />
            <OrderInfoOption
              name="Длительность аренды"
              value={
                details.date
                  ? `${details.date.days}д ${details.date.hours}ч`
                  : placeholder
              }
            />
            <OrderInfoOption
              name="Тариф"
              value={details.rate?.rateTypeId.name || placeholder}
            />
            {details.services.map((service: IService) => (
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
        <span>{details.car ? calculatePrice() : placeholder}</span>
      </p>
      <button
        className="btn-large"
        type="button"
        onClick={handleNextBtnClick}
        disabled={nextBtnIsDisabled()}
      >
        {btnLabel}
      </button>
      <PopUp
        visible={popUpVisible}
        onConfirm={() => setPopUpVisible(false)}
        onCancel={() => setPopUpVisible(false)}
      />
    </div>
  );
}

export default OrderInfo;
