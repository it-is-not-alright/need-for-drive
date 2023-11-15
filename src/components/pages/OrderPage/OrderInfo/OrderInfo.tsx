import './style.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import orderDetailsSelector from '~/store/orderDetails/selectors';
import { setCurrentStage, setReachedStage } from '~/store/orderDetails/slice';
import { AppDispatch } from '~/store/root';

import { placeholder } from './constants';
import OrderInfoOption from './OrderInfoOption/OrderInfoOption';
import { OrderInfoProps } from './types';

function OrderInfo({ btnLabel }: OrderInfoProps) {
  const { currentStage, reachedStage, city, point, car, color } =
    useSelector(orderDetailsSelector);
  const dispatch = useDispatch<AppDispatch>();

  function nextBtnIsDisabled(): boolean {
    switch (currentStage) {
      case 0:
        return point === null;
      case 1:
        return car == null;
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
            <OrderInfoOption name="Длительность аренды" value={placeholder} />
            <OrderInfoOption name="Тариф" value={placeholder} />
            <OrderInfoOption name="Полный бак" value={placeholder} />
          </>
        )}
      </div>
      <p className="dark-text fs-2">
        <span className="fw-500">Цена: </span>
        <span>от 8 000 до 12 000 ₽</span>
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
