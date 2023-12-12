import './style.scss';

import React, { useState } from 'react';

import Button from '~/components/common/Button/Button';
import Icon from '~/components/common/Icon/Icon';
import useInterval from '~/hooks/useInterval';

import { defaultDelay, longDelay, slides } from './constants';
import NavDots from './NavDots/NavDots';
import SliderImages from './SliderImages/SliderImages';
import { SliderProps } from './types';

function Slider({ isDisplay }: SliderProps) {
  let pauseInterval: number;
  const [isPause, setIsPause] = useState<boolean>(false);
  const [delay, setDelay] = useState<number>(defaultDelay);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function goBackward(): void {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function goForward(): void {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
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

  function handleBackwardBtnClick(): void {
    pause();
    goBackward();
  }

  function handleForwardBtnClick(): void {
    pause();
    goForward();
  }

  const handleNavDotClick = (slideIndex: number): void => {
    pause();
    setCurrentIndex(slideIndex);
  };

  if (!isDisplay) return null;

  return (
    <div id="slider">
      <SliderImages slides={slides} activeIndex={currentIndex} />
      <button
        className="slider-btn"
        type="button"
        onClick={handleBackwardBtnClick}
      >
        <Icon name="slider-left-arrow" width={10} height={20} />
      </button>
      <div id="slider__content">
        <div id="slider__content__info">
          <h1 className="white-text fw-500">{slides[currentIndex].title}</h1>
          <p className="light-text fw-300">
            {slides[currentIndex].description}
          </p>
          <Button
            text="Подробнее"
            className={`secondary ${slides[currentIndex].colorTheme}`}
          />
        </div>
        <NavDots
          slides={slides}
          activeIndex={currentIndex}
          onClick={handleNavDotClick}
        />
      </div>
      <button
        className="slider-btn"
        type="button"
        onClick={handleForwardBtnClick}
      >
        <Icon name="slider-right-arrow" width={10} height={20} />
      </button>
    </div>
  );
}

export default Slider;
