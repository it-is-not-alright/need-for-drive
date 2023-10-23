import './style.scss';

import React, { ReactElement, useState } from 'react';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import { stages } from './constants';
import OrderInfo from './OrderInfo/OrderInfo';
import AdditionalStage from './stages/AdditionalStage/AdditionalStage';
import FinalStage from './stages/FinalStage/FinalStage';
import LocationStage from './stages/LocationStage/LocationStage';
import ModelStage from './stages/ModelStage/ModelStage';
import { OrderPageProps } from './types';

function OrderPage({ header }: OrderPageProps) {
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [reachedStageIndex, setReachedStageIndex] = useState<number>(0);

  function renderStage(): ReactElement {
    switch (currentStageIndex) {
      case 0:
        return (
          <LocationStage
            updateReachedStageIndex={() => setReachedStageIndex(0)}
          />
        );
      case 1:
        return (
          <ModelStage updateReachedStageIndex={() => setReachedStageIndex(1)} />
        );
      case 2:
        return (
          <AdditionalStage
            updateReachedStageIndex={() => setReachedStageIndex(2)}
          />
        );
      case 3:
        return <FinalStage />;
      default:
        return <p>Error</p>;
    }
  }

  const handleNextBtnClick = (): void => {
    if (currentStageIndex < 3) {
      setCurrentStageIndex(currentStageIndex + 1);
      setReachedStageIndex(currentStageIndex + 1);
    }
  };

  return (
    <div id="order-page">
      {header}
      <div className="line-horizontal" />
      <Breadcrumbs
        items={stages.map((stage) => stage.name)}
        currentIndex={currentStageIndex}
        reachedIndex={reachedStageIndex}
        onIndexChange={(newIndex: number) => setCurrentStageIndex(newIndex)}
      />
      <div className="line-horizontal" />
      <div id="order-page__content">
        <div id="order-page__content__stage">{renderStage()}</div>
        <div className="line-vertical" />
        <OrderInfo
          btnLabel={stages[currentStageIndex].btnLabel}
          btnOnClick={handleNextBtnClick}
          reachedStageIndex={reachedStageIndex}
          currentStageIndex={currentStageIndex}
        />
      </div>
    </div>
  );
}

export default OrderPage;
