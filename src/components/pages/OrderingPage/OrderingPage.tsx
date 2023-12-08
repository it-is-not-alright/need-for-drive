import './style.scss';

import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import orderDetailsSelector from '~/store/order/details/selectors';
import { setCurrentStage } from '~/store/order/details/slice';
import { AppDispatch } from '~/store/root';

import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import OrderInfo from '../OrderInfo/OrderInfo';
import { breadcrumbsItems, stages } from './constants';
import AdditionalStage from './stages/AdditionalStage/AdditionalStage';
import FinalStage from './stages/FinalStage/FinalStage';
import LocationStage from './stages/LocationStage/LocationStage';
import ModelStage from './stages/ModelStage/ModelStage';

function OrderingPage() {
  const { currentStage, reachedStage } = useSelector(orderDetailsSelector);
  const dispatch = useDispatch<AppDispatch>();
  const stageComponents: ReactElement[] = [
    <LocationStage />,
    <ModelStage />,
    <AdditionalStage />,
    <FinalStage />,
  ];

  return (
    <div id="order-page" className="centered-grid">
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
        <div id="line-vertical" />
        <OrderInfo btnLabel={stages[currentStage].btnLabel} />
      </div>
    </div>
  );
}

export default OrderingPage;
