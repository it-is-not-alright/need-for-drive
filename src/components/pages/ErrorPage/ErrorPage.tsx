import './style.scss';

import React from 'react';
import { useNavigate } from 'react-router';

import Button from '~/components/Button/Button';

import { ErrorPageProps } from './types';

function ErrorPage({ title, errorMessage, reset }: ErrorPageProps) {
  const navigate = useNavigate();

  const handleResetButtonClick = () => {
    navigate('/');
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
