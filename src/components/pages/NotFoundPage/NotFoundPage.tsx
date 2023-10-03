import './style.scss';

import React from 'react';
import { useNavigate } from 'react-router';

function NotFoundPage() {
  const navigate = useNavigate();

  function resetBtnOnClick() {
    navigate('/');
  }

  return (
    <div className="not-found-page">
      <div className="not-found-page__content">
        <h1 className="dark-text">Страница не найдена</h1>
        <button className="btn-large" type="button" onClick={resetBtnOnClick}>
          На главную
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
