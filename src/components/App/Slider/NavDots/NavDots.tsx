import './style.scss';

import classNames from 'classnames';
import React from 'react';

import Icon from '~/components/common/Icon/Icon';

import { NavDotsProps } from './types';

function NavDots({ slides, activeIndex, onClick }: NavDotsProps) {
  return (
    <div id="slider__content__nav-dots">
      {slides.map((slide) => {
        return (
          <button
            className="btn-icon"
            key={slide.id}
            type="button"
            onClick={() => onClick(slide.id)}
          >
            <Icon
              name="dot"
              width={8}
              height={8}
              className={classNames({ active: slide.id === activeIndex })}
            />
          </button>
        );
      })}
    </div>
  );
}

export default NavDots;
