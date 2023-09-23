import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../Footer/Footer';
import Slider from '../../Slider/Slider';
import { MainPageProps } from './types';

function MainPage({ header }: MainPageProps) {
  return (
    <div id="main-page">
      <div id="main-page__content">
        {header}
        <div id="main-page__content__info">
          <h1 className="fw-700">
            <span className="dark-text">Каршеринг</span>
            <br />
            <span className="green-text">Need for drive</span>
          </h1>
          <p className="gray-text">Поминутная аренда авто твоего города</p>
          <Link className="btn-large" to="/order">
            Забронировать
          </Link>
        </div>
        <Footer />
      </div>
      <Slider />
    </div>
  );
}

export default MainPage;
