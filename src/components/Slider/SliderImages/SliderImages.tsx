import './style.scss';

import React from 'react';
import classNames from 'classnames';

import SliderImagesProps from './types';

function SliderImages({ slides, activeIndex }: SliderImagesProps) {
  return (
    <>
      {slides.map((slide) => {
        return (
          <div
            className={classNames('slider-image', {
              active: slide.id === activeIndex,
            })}
            style={{ backgroundImage: `url(${slide.imageURL})` }}
            key={slide.id}
          />
        );
      })}
      <div className="slider-shadow" />
    </>
  );
}

export default SliderImages;
