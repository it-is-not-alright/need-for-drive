import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { formatPriceRange } from '~/format/price';

import { CarBoxProps } from './types';

function CarBox({ car, isActive, onClick }: CarBoxProps) {
  const price = formatPriceRange(car.priceMin, car.priceMax);
  const classes: string = classNames('car-box', { active: isActive });
  return (
    <div
      className={classes}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={car.id}
    >
      <p className="dark-text fs-2">{car.name}</p>
      <p className="gray-text fw-300">{price}</p>
      <img src={car.thumbnail.path} alt={car.name} />
    </div>
  );
}

export default CarBox;
