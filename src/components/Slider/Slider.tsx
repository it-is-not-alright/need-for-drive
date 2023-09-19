import './style.scss';

import React from 'react';

import Icon from '../Icon/Icon';

export default function Slider() {
  return (
    <div id="slider">
      <button className="slidebar-btn" type="button">
        <Icon name="slider-left-arrow" width={10} height={20} />
      </button>
      <div id="slider__content">
        <div id="slider__content__info">
          <h1 className="white-text">Бесплатная парковка</h1>
          <p className="gray-text">
            Оставляйте машину на платных городских парковках и разрешенных
            местах, не нарушая ПДД, а также в аэропортах.
          </p>
          <button className="btn-medium" type="button">
            Подробнее
          </button>
        </div>
        <div id="slider__content__dots">
          <Icon name="dot" width={8} height={8} />
          <Icon className="selected" name="dot" width={8} height={8} />
          <Icon name="dot" width={8} height={8} />
          <Icon name="dot" width={8} height={8} />
        </div>
      </div>
      <button className="slidebar-btn" type="button">
        <Icon name="slider-right-arrow" width={10} height={20} />
      </button>
    </div>
  );
}
