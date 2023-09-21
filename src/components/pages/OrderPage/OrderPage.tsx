import './style.scss';

import React, { useState } from 'react';

import OrderPageProps from './types';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import InputSelect from '../../InputSelect/InputSelect';
import MapImage from '../../../assets/images/map/img-0.png';

function OrderPage({ header }: OrderPageProps) {
  const [city, setCity] = useState<string>('');
  const [point, setPoint] = useState<string>('');
  const cities = [
    'Ульяновск',
    'Уфа',
    'Уральск',
    'Увельский',
    'Москва',
    'Казань',
    'Самара',
  ];
  const points = ['Нариманова 42'];

  return (
    <div id="order-page">
      {header}
      <div className="line-horizontal" />
      <Breadcrumbs
        items={['Местоположение', 'Модель', 'Дополнительно', 'Итого']}
        activeIndex={0}
      />
      <div className="line-horizontal" />
      <div id="order-page__content">
        <div id="order-page__content__choice">
          <div id="order-page__content__choice__inputs">
            <p className="dark-text fw-300 ta-right">Город</p>
            <InputSelect
              placeholder="Начните вводить город ..."
              value={city}
              setValue={setCity}
              items={cities}
              id="city-input"
            />
            <p className="dark-text fw-300 ta-right">Пункт выдачи</p>
            <InputSelect
              placeholder="Начните вводить пункт ..."
              value={point}
              setValue={setPoint}
              items={points}
              id="point-input"
            />
          </div>
          <p className="dark-text fw-300">Выбрать на карте:</p>
          <div id="order-page__content__choice__map">
            <img src={MapImage} alt="map" />
          </div>
        </div>
        <div className="line-vertical" />
        <div id="order-page__content__check">
          <p className="dark-text fw-500 ta-right fs-3">Ваш заказ:</p>
          <div id="order-page__content__check__point" className="fw-300">
            <p className="dark-text">Пункт выдачи</p>
            <div className="line-dotted" />
            <p className="gray-text">
              <span>Ульяновск,</span>
              <br />
              <span>Нариманова 42</span>
            </p>
          </div>
          <p className="dark-text fs-2">
            <span className="fw-500">Цена: </span>
            <span>от 8 000 до 12 000 ₽</span>
          </p>
          <button className="btn-large" type="button">
            Выбрать модель
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
