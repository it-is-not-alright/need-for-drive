import './style.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '~/components/App/types';
import Button from '~/components/common/Button/Button';
import Footer from '~/components/pages/MainPage/Footer/Footer';

function MainPage() {
  const navigate = useNavigate();

  const handleOrderingButtonClick = () => {
    navigate(AppRoute.Ordering);
  };

  return (
    <div id="main-page" className="centered-grid">
      <div id="main-page__content">
        <h1 className="fw-700">
          <span className="dark-text">Каршеринг</span>
          <br />
          <span className="green-text">Need for drive</span>
        </h1>
        <p className="gray-text">Поминутная аренда авто твоего города</p>
        <Button text="Забронировать" onClick={handleOrderingButtonClick} />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
