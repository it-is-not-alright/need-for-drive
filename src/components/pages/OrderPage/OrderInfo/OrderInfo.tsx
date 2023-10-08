import './style.scss';

import React from 'react';
import { useSelector } from 'react-redux';

import citySelector from '~/store/city/selectors';
import pointSelector from '~/store/point/selectors';
import { RootState } from '~/store/root';

import { OrderInfoProps } from './types';

function OrderInfo({ btnLabel, btnOnClick }: OrderInfoProps) {
  const mapState = (state: RootState) => ({
    city: citySelector(state),
    point: pointSelector(state),
  });
  const { city, point } = useSelector(mapState);

  return (
    <div id="order-info">
      <p className="dark-text fw-500 ta-right fs-3">Ваш заказ:</p>
      <div id="order-info__options">
        <div id="order-info__option" className="fw-300">
          <p className="dark-text">Пункт выдачи</p>
          <div className="line-dotted" />
          <p className="gray-text">
            <span>{city ? `${city.name},` : 'Не выбрано,'}</span>
            <br />
            <span>{point ? point.name : 'Не выбрано'}</span>
          </p>
        </div>
      </div>
      <p className="dark-text fs-2">
        <span className="fw-500">Цена: </span>
        <span>от 8 000 до 12 000 ₽</span>
      </p>
      <button className="btn-large" type="button" onClick={btnOnClick}>
        {btnLabel}
      </button>
    </div>
  );
}

export default OrderInfo;
