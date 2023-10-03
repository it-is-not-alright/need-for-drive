import './style.scss';

import React from 'react';
import { useNavigate } from 'react-router';

import { ErrorPageProps } from './types';

function ErrorPage({ title, errorMessage, reset }: ErrorPageProps) {
  const navigate = useNavigate();

  function resetBtnOnClick() {
    navigate('/');
    reset();
  }

  return (
    <div className="error-page">
      <div className="error-page__content">
        <h1 className="dark-text">{title}</h1>
        <p className="dark-text">{errorMessage}</p>
        <button className="btn-large" type="button" onClick={resetBtnOnClick}>
          На главную
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
