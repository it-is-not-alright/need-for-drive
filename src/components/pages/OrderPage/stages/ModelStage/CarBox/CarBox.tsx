import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { formatPrice } from '~/format/price';

import { CarBoxProps } from './types';

function CarBox({ car, isActive, onClick }: CarBoxProps) {
  const price = `${formatPrice(car.priceMin)} - ${formatPrice(
    car.priceMax,
    true,
  )}`;
  const classes: string = classNames('car-box', { active: isActive });
  return (
    <div
      className={classes}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <p className="dark-text fs-2">{car.name}</p>
      <p className="gray-text fw-300">{price}</p>
      <img src={car.thumbnail.path} alt={car.name} />
    </div>
  );
}

export default CarBox;
