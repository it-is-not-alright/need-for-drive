import './style.scss';

import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import orderDetailsSelector from '~/store/order/details/selectors';
import { setCurrentStage } from '~/store/order/details/slice';
import { AppDispatch } from '~/store/root';

import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import { breadcrumbsItems, stages } from './constants';
import OrderInfo from './OrderInfo/OrderInfo';
import AdditionalStage from './stages/AdditionalStage/AdditionalStage';
import FinalStage from './stages/FinalStage/FinalStage';
import LocationStage from './stages/LocationStage/LocationStage';
import ModelStage from './stages/ModelStage/ModelStage';
import { OrderPageProps } from './types';

function OrderingPage({ header }: OrderPageProps) {
  const { currentStage, reachedStage } = useSelector(orderDetailsSelector);
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
      <Breadcrumbs
        items={breadcrumbsItems}
        currentIndex={currentStage}
        reachedIndex={reachedStage}
        onIndexChange={(newIndex: number) =>
          dispatch(setCurrentStage(newIndex))
        }
      />
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

export default OrderingPage;
