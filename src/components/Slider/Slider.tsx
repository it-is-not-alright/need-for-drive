import './style.scss';

import React, { useState } from 'react';
import classNames from 'classnames';

import Icon from '../Icon/Icon';
import Slide, { getSlides } from './Slide';
import useInterval from '../../hooks/useInterval';
import { defaultDelay, longDelay } from './constants';

function Slider() {
  const slides: Slide[] = getSlides();
  const [delay, setDelay] = useState<number>(defaultDelay);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function goBackward() {
    if (activeIndex === 0) {
      setActiveIndex(slides.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  function goForward() {
    if (activeIndex === slides.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  useInterval(() => {
    goForward();
    if (delay === longDelay) {
      setDelay(defaultDelay);
    }
  }, delay);

  function handleBackwardBtnOnClick() {
    setDelay(longDelay);
    goBackward();
  }

  function handleForwardBtnOnClick() {
    setDelay(longDelay);
    goForward();
  }

  return (
    <div id="slider">
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
      <button
        className="slider-btn"
        type="button"
        onClick={handleBackwardBtnOnClick}
      >
        <Icon name="slider-left-arrow" width={10} height={20} />
      </button>
      <div id="slider__content">
        <div id="slider__content__info">
          <h1 className="white-text">{slides[activeIndex].title}</h1>
          <p className="light-text">{slides[activeIndex].description}</p>
          <button
            className={`btn-medium ${slides[activeIndex].colorTheme}`}
            type="button"
          >
            Подробнее
          </button>
        </div>
        <div id="slider__content__nav-dots">
          {slides.map((slide) => {
            return (
              <Icon
                name="dot"
                width={8}
                height={8}
                className={classNames({ active: slide.id === activeIndex })}
                key={slide.id}
              />
            );
          })}
        </div>
      </div>
      <button
        className="slider-btn"
        type="button"
        onClick={handleForwardBtnOnClick}
      >
        <Icon name="slider-right-arrow" width={10} height={20} />
      </button>
    </div>
  );
}

export default Slider;
