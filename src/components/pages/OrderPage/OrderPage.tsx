import './style.scss';

import React, { ReactElement, useState } from 'react';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import stages from './constants';
import OrderInfo from './OrderInfo/OrderInfo';
import AdditionallyStage from './stages/AdditionallyStage/AdditionallyStage';
import FinalStage from './stages/FinalStage/FinalStage';
import LocationStage from './stages/LocationStage/LocationStage';
import ModelStage from './stages/ModelStage/ModelStage';
import { OrderPageProps } from './types';

function OrderPage({ header }: OrderPageProps) {
  const [city, setCity] = useState<string>('');
  const [point, setPoint] = useState<string>('');
  const [stageIndex] = useState<number>(0);

  function renderStage(): ReactElement {
    switch (stageIndex) {
      case 0:
        return (
          <LocationStage
            city={city}
            setCity={setCity}
            point={point}
            setPoint={setPoint}
          />
        );
      case 1:
        return <ModelStage />;
      case 2:
        return <AdditionallyStage />;
      case 3:
        return <FinalStage />;
      default:
        return <p>Error</p>;
    }
  }

  return (
    <div id="order-page">
      {header}
      <div className="line-horizontal" />
      <Breadcrumbs
        items={stages.map((stage) => stage.name)}
        activeIndex={stageIndex}
      />
      <div className="line-horizontal" />
      <div id="order-page__content">
        {renderStage()}
        <div className="line-vertical" />
        <OrderInfo btnLabel={stages[stageIndex].btnLabel} />
      </div>
    </div>
  );
}

export default OrderPage;
