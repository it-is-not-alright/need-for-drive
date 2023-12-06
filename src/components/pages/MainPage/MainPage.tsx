import './style.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '~/components/Button/Button';
import Footer from '~/components/Footer/Footer';
import Slider from '~/components/Slider/Slider';

import { MainPageProps } from './types';

function MainPage({ header }: MainPageProps) {
  const navigate = useNavigate();

  const handleBookButton = () => {
    navigate('/order');
  };

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
          <Button text="Забронировать" onClick={handleBookButton} />
        </div>
        <Footer />
      </div>
      <Slider />
    </div>
  );
}

export default MainPage;
