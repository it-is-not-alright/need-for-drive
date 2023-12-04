import './style.scss';

import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import orderDetailsSelector from '~/store/orderDetails/selectors';
import { setCurrentStage } from '~/store/orderDetails/slice';
import { AppDispatch } from '~/store/root';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import { stages } from './constants';
import OrderInfo from './OrderInfo/OrderInfo';
import AdditionalStage from './stages/AdditionalStage/AdditionalStage';
import FinalStage from './stages/FinalStage/FinalStage';
import LocationStage from './stages/LocationStage/LocationStage';
import ModelStage from './stages/ModelStage/ModelStage';
import { OrderPageProps } from './types';

function OrderPage({ header }: OrderPageProps) {
  const { id, currentStage, reachedStage } = useSelector(orderDetailsSelector);
  const dispatch = useDispatch<AppDispatch>();
  const stageComponents: ReactElement[] = [
    <LocationStage />,
    <ModelStage />,
    <AdditionalStage />,
    <FinalStage />,
  ];

  return (
    <div id="order-page">
      {header}
      <div className="line-horizontal" />
      {id === 0 ? (
        <Breadcrumbs
          items={stages.map((stage) => stage.name)}
          currentIndex={currentStage}
          reachedIndex={reachedStage}
          onIndexChange={(newIndex: number) =>
            dispatch(setCurrentStage(newIndex))
          }
        />
      ) : (
        <p className="fw-700">Заказ номер {id}</p>
      )}
      <div className="line-horizontal" />
      <div id="order-page__content">
        <div id="order-page__content__stage">
          {stageComponents[currentStage]}
        </div>
        <div className="line-vertical" />
        <OrderInfo btnLabel={stages[currentStage].btnLabel} />
      </div>
    </div>
  );
}

export default OrderPage;
