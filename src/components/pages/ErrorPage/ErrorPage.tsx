import './style.scss';

import React from 'react';
import { useNavigate } from 'react-router';

import { AppRoute } from '~/components/App/types';
import Button from '~/components/common/Button/Button';

import { ErrorPageProps } from './types';

function ErrorPage({ title, errorMessage, reset }: ErrorPageProps) {
  const navigate = useNavigate();

  const handleResetButtonClick = () => {
    navigate(AppRoute.Main);
    reset();
  };

  return (
    <div className="error-page">
      <div className="error-page__content">
        <h1 className="dark-text">{title}</h1>
        <p className="dark-text">{errorMessage}</p>
        <Button text="На главную" onClick={handleResetButtonClick} />
      </div>
    </div>
  );
}

export default ErrorPage;
