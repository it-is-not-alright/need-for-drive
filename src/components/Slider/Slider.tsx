import './style.scss';

import React, { useState } from 'react';

import Icon from '../Icon/Icon';
import getSlides from './getSlides';
import { ISlide } from './types';
import useInterval from '../../hooks/useInterval';
import { defaultDelay, longDelay } from './constants';
import SliderImages from './SliderImages/SliderImages';
import NavDots from './NavDots/NavDots';

function Slider() {
  let pauseInterval: number;
  const slides: ISlide[] = getSlides();
  const [isPause, setIsPause] = useState<boolean>(false);
  const [delay, setDelay] = useState<number>(defaultDelay);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function goBackward(): void {
    if (activeIndex === 0) {
      setActiveIndex(slides.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  function goForward(): void {
    if (activeIndex === slides.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  useInterval(
    () => {
      goForward();
      if (delay === longDelay) {
        setDelay(defaultDelay);
      }
    },
    isPause ? null : delay,
  );

  function pause(): void {
    setIsPause(true);
    window.clearInterval(pauseInterval);
    pauseInterval = window.setInterval(() => {
      setIsPause(false);
      window.clearInterval(pauseInterval);
    }, longDelay);
  }

  function handleBackwardBtnOnClick(): void {
    pause();
    goBackward();
  }

  function handleForwardBtnOnClick(): void {
    pause();
    goForward();
  }

  const handleNavDotOnClick = (slideIndex: number): void => {
    pause();
    setActiveIndex(slideIndex);
  };

  return (
    <div id="slider">
      <SliderImages slides={slides} activeIndex={activeIndex} />
      <button
        className="slider-btn"
        type="button"
        onClick={handleBackwardBtnOnClick}
      >
        <Icon name="slider-left-arrow" width={10} height={20} />
      </button>
      <div id="slider__content">
        <div id="slider__content__info">
          <h1 className="white-text fw-500">{slides[activeIndex].title}</h1>
          <p className="light-text fw-300">{slides[activeIndex].description}</p>
          <button
            className={`btn-medium ${slides[activeIndex].colorTheme}`}
            type="button"
          >
            Подробнее
          </button>
        </div>
        <NavDots
          slides={slides}
          activeIndex={activeIndex}
          onClick={handleNavDotOnClick}
        />
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
