import React from 'react';
import './slider.scss';

export default function Slider() {
  return (
    <div id='slider'>
      <button>
        <svg
          width='10'
          height='20'
          viewBox='0 0 10 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9 1L1 10L9 19'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </button>
      <div id='slider__content'>
        <div id='slider__content__info'>
          <h1 className='white-text'>Бесплатная парковка</h1>
          <p className='gray-text'>
            Оставляйте машину на платных городских парковках и разрешенных
            местах, не нарушая ПДД, а также в аэропортах.
          </p>
          <button className='button-medium'>Подробнее</button>
        </div>
        <div id='slider__content__dots'>
          <svg
            width='8'
            height='8'
            viewBox='0 0 8 8'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='4' cy='4' r='4' />
          </svg>
          <svg
            className='selected'
            width='8'
            height='8'
            viewBox='0 0 8 8'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='4' cy='4' r='4' />
          </svg>
          <svg
            width='8'
            height='8'
            viewBox='0 0 8 8'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='4' cy='4' r='4' />
          </svg>
          <svg
            width='8'
            height='8'
            viewBox='0 0 8 8'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='4' cy='4' r='4' />
          </svg>
        </div>
      </div>
      <button>
        <svg
          width='10'
          height='20'
          viewBox='0 0 10 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 1L9 10L1 19'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </button>
    </div>
  );
}
