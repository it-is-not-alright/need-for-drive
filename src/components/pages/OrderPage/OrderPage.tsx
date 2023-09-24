import './style.scss';

import React, { useState } from 'react';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import OrderInfo from './OrderInfo/OrderInfo';
import LocationStage from './stages/LocationStage/LocationStage';
import { OrderPageProps } from './types';

function OrderPage({ header }: OrderPageProps) {
  const [city, setCity] = useState<string>('');
  const [point, setPoint] = useState<string>('');

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
        <LocationStage
          city={city}
          setCity={setCity}
          point={point}
          setPoint={setPoint}
        />
        <div className="line-vertical" />
        <OrderInfo />
      </div>
    </div>
  );
}

export default OrderPage;
