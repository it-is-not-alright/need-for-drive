import './style.scss';

import React, { ReactElement, CSSProperties, useState } from 'react';

import Icon from '../Icon/Icon';
import Slide, { getSlides } from './Slide';
import useInterval from '../../hooks/useInterval';

function Slider() {
  const defaultDelay: number = 3000;
  const longDelay: number = 10000;
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

  function getImages(): ReactElement[] {
    const gradient: string = 'linear-gradient(180deg, #0000 0%, #000 100%)';
    return slides.map((slide) => {
      const style: CSSProperties = {
        backgroundImage: `${gradient}, url(${slide.imageURL})`,
      };
      const className: string = `slider-image ${
        slide.id === activeIndex ? 'active' : ''
      }`;
      return <div className={className} style={style} key={slide.id} />;
    });
  }

  function getNavDots(): ReactElement[] {
    return slides.map((slide) => {
      const className: string = slide.id === activeIndex ? 'active' : '';
      return (
        <Icon
          name="dot"
          width={8}
          height={8}
          className={className}
          key={slide.id}
        />
      );
    });
  }

  return (
    <div id="slider">
      {getImages()}
      <button
        className="slidebar-btn"
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
        <div id="slider__content__nav-dots">{getNavDots()}</div>
      </div>
      <button
        className="slidebar-btn"
        type="button"
        onClick={handleForwardBtnOnClick}
      >
        <Icon name="slider-right-arrow" width={10} height={20} />
      </button>
    </div>
  );
}

export default Slider;
