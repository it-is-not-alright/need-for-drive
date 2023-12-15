import './style.scss';

import React from 'react';
import { useSelector } from 'react-redux';

import { dateToString } from '~/convert/date';
import orderDetailsSelector from '~/store/ordering-details/selectors';

function FinalStage() {
  const { car, date, isFullTank } = useSelector(orderDetailsSelector);

  return (
    <div id="final-stage">
      <div>
        <p className="dark-text fs-3">{car.name}</p>
        <p className="car-number">{car.number}</p>
        <p>
          <span className="fw-700">Топливо </span>
          <span className="fw-300">{`${isFullTank ? 100 : car.tank}%`}</span>
        </p>
        <p>
          <span className="fw-700">Доступна с </span>
          <span className="fw-300">{dateToString(new Date(date.from))}</span>
        </p>
      </div>
      <img src={car.thumbnail.path} alt={car.name} />
    </div>
  );
}

export default FinalStage;
