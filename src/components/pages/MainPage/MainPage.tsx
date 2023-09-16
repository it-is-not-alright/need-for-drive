import './main-page.scss';

import React, { ReactElement } from 'react';

import Footer from '../../Footer_/Footer';
import Slider from '../../Slider/Slider';

type MainPageProps = {
  header: ReactElement;
};

export default function MainPage({ header }: MainPageProps) {
  return (
    <div id="main-page">
      <div id="main-page__content">
        {header}
        <div id="main-page__content__info">
          <h1>
            <span className="dark-text">Каршеринг</span>
            <br />
            <span className="green-text">Need for drive</span>
          </h1>
          <p className="gray-text">Поминутная аренда авто твоего города</p>
          <button className="btn-large" type="button">
            Забронировать
          </button>
        </div>
        <Footer />
      </div>
      <Slider />
    </div>
  );
}
