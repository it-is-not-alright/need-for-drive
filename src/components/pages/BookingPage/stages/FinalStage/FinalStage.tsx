import './style.scss';

import React from 'react';
import { useSelector } from 'react-redux';

import { dateToString } from '~/format/datetime';
import orderDetailsSelector from '~/store/order/details/selectors';

import { fullTankService } from '../../../../../store/services/constants';

function FinalStage() {
  const { car, date, services } = useSelector(orderDetailsSelector);

  function fullTank(): boolean {
    return (
      services.find((service) => {
        return service.id === fullTankService.id;
      }) !== undefined
    );
  }

  return (
    <div id="final-stage">
      <div id="final-stage__info">
        <p className="dark-text fs-3">{car.name}</p>
        <p className="car-number">{car.number}</p>
        <p>
          <span className="fw-700">Топливо </span>
          <span className="fw-300">{`${fullTank() ? 100 : car.tank}%`}</span>
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
