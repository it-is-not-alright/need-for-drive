import React from 'react';
import Menu from '../../menu/Menu';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import Slider from '../../slider/Slider';
import './main-page.scss';

export default function MainPage() {
  return (
    <>
      <Menu />
      <div className='main-page'>
        <div className='main-page__content'>
          <Header />
          <div className='main-page__content__info'>
            <h1>
              <span className='dark-text'>Каршеринг</span>
              <br />
              <span className='green-text'>Need for drive</span>
            </h1>
            <p className='gray-text'>Поминутная аренда авто твоего города</p>
            <button className='button-large'>Забронировать</button>
          </div>
          <Footer />
        </div>
        <Slider />
      </div>
    </>
  );
}
