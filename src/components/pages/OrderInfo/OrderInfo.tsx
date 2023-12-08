import './style.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { AppRoute } from '~/components/App/types';
import Button from '~/components/common/Button/Button';
import PopUp from '~/components/common/PopUp/PopUp';
import { formatPrice } from '~/format/price';
import orderDetailsSelector from '~/store/order/details/selectors';
import { setReachedStage } from '~/store/order/details/slice';
import newOrderSelector from '~/store/order/new/selectors';
import { postOrder } from '~/store/order/new/thunk';
import { AppDispatch } from '~/store/root';
import { IService } from '~/store/types';

import { placeholder } from './constants';
import OrderInfoOption from './OrderInfoOption/OrderInfoOption';
import { OrderInfoProps } from './types';

function OrderInfo({ btnLabel }: OrderInfoProps) {
  const details = useSelector(orderDetailsSelector);
  const [popUpVisible, setPopUpVisible] = useState<boolean>(false);
  const {
    data: newOrder,
    isLoading,
    errorMessage: error,
  } = useSelector(newOrderSelector);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (error === null) {
      return;
    }
    const errorMessage: string = 'Ошибка сервера';
    throw new Error(errorMessage);
  }, [error]);

  useEffect(() => {
    if (newOrder.id === 0) {
      return;
    }
    setPopUpVisible(false);
    navigate(AppRoute.Order);
  }, [newOrder]);

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

  const handleNextBtnClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    if (details.currentStage < 3) {
      dispatch(setReachedStage(details.currentStage + 1));
    } else if (details.currentStage === 3) {
      setPopUpVisible(true);
    }
    (event.target as HTMLElement).blur();
  };

  function getPrice(): string {
    if (details.rate !== null) {
      return formatPrice(details.price, true);
    }
    if (details.car !== null) {
      const min = formatPrice(details.car.priceMin);
      const max = formatPrice(details.car.priceMax, true);
      return `от ${min} до ${max}`;
    }
    return placeholder;
  }

  const createOrder = () => {
    dispatch(postOrder());
  };

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
      <p className="dark-text fs-3">
        <span className="fw-500">Цена: </span>
        <span>{details.car ? getPrice() : placeholder}</span>
      </p>
      <Button
        text={btnLabel}
        onClick={(event) => handleNextBtnClick(event)}
        disabled={nextBtnIsDisabled()}
      />
      <PopUp
        title="Подтвердить заказ"
        visible={popUpVisible}
        onConfirm={createOrder}
        onCancel={() => setPopUpVisible(false)}
        loading={isLoading}
      />
    </div>
  );
}

export default OrderInfo;
