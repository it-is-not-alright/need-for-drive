import './style.scss';

import React from 'react';

import Breadcrumbs from '~/components/Breadcrumbs/Breadcrumbs';

import stages from './constants';
import OrderInfo from './OrderInfo/OrderInfo';
import LocationStage from './stages/LocationStage/LocationStage';
import { OrderPageProps } from './types';

function OrderPage({ header }: OrderPageProps) {
  return (
    <div id="order-page">
      {header}
      <div className="line-horizontal" />
      <Breadcrumbs items={stages} activeIndex={0} />
      <div className="line-horizontal" />
      <div id="order-page__content">
        <LocationStage />
        <div className="line-vertical" />
        <OrderInfo />
      </div>
    </div>
  );
}

export default OrderPage;
