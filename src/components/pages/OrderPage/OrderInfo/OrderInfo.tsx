import './style.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import citySelector from '~/store/city/selectors';
import pointSelector from '~/store/point/selectors';

import { placeholder } from './constants';
import OrderInfoOption from './OrderInfoOption/OrderInfoOption';
import { OrderInfoProps } from './types';

function OrderInfo({
  btnLabel,
  btnOnClick,
  reachedStageIndex,
}: OrderInfoProps) {
  const mapSelector = createSelector(
    [citySelector, pointSelector],
    (city, point) => {
      return { city, point };
    },
  );
  const { city, point } = useSelector(mapSelector);

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
        {reachedStageIndex > 0 && (
          <OrderInfoOption name="Модель" value={placeholder} />
        )}
      </div>
      <p className="dark-text fs-2">
        <span className="fw-500">Цена: </span>
        <span>от 8 000 до 12 000 ₽</span>
      </p>
      <button
        className="btn-large"
        type="button"
        onClick={btnOnClick}
        disabled={point === null}
      >
        {btnLabel}
      </button>
    </div>
  );
}

export default OrderInfo;
