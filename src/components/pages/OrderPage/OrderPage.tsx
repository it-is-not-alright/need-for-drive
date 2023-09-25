import './style.scss';

import React, { ReactElement, useState } from 'react';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import stages from './constants';
import OrderInfo from './OrderInfo/OrderInfo';
import AdditionalStage from './stages/AdditionalStage/AdditionalStage';
import FinalStage from './stages/FinalStage/FinalStage';
import LocationStage from './stages/LocationStage/LocationStage';
import ModelStage from './stages/ModelStage/ModelStage';
import { OrderPageProps } from './types';

function OrderPage({ header }: OrderPageProps) {
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [availableStageIndex, setAvailableStageIndex] = useState<number>(0);

  function renderStage(): ReactElement {
    switch (stageIndex) {
      case 0:
        return (
          <LocationStage
            updateAvailableStageIndex={() => setAvailableStageIndex(0)}
          />
        );
      case 1:
        return (
          <ModelStage
            updateAvailableStageIndex={() => setAvailableStageIndex(1)}
          />
        );
      case 2:
        return (
          <AdditionalStage
            updateAvailableStageIndex={() => setAvailableStageIndex(2)}
          />
        );
      case 3:
        return <FinalStage />;
      default:
        return <p>Error</p>;
    }
  }

  const handleNextBtnOnClick = (): void => {
    if (stageIndex < 3) {
      setStageIndex(stageIndex + 1);
      setAvailableStageIndex(stageIndex + 1);
    }
  };

  const handleStageIndexChange = (newIndex: number): void => {
    setStageIndex(newIndex);
  };

  return (
    <div id="order-page">
      {header}
      <div className="line-horizontal" />
      <Breadcrumbs
        items={stages.map((stage) => stage.name)}
        activeIndex={stageIndex}
        availableIndex={availableStageIndex}
        onIndexChange={handleStageIndexChange}
      />
      <div className="line-horizontal" />
      <div id="order-page__content">
        <div id="order-page__content__stage">{renderStage()}</div>
        <div className="line-vertical" />
        <OrderInfo
          btnLabel={stages[stageIndex].btnLabel}
          btnOnClick={handleNextBtnOnClick}
        />
      </div>
    </div>
  );
}

export default OrderPage;
