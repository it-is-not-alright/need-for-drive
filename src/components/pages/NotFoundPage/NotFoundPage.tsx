import './style.scss';

import React from 'react';
import { useNavigate } from 'react-router';

import Button from '~/components/Button/Button';

function NotFoundPage() {
  const navigate = useNavigate();

  const handleResetButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="not-found-page">
      <div className="not-found-page__content">
        <h1 className="dark-text">Страница не найдена</h1>
        <Button text="На главную" onClick={handleResetButtonClick} />
      </div>
    </div>
  );
}

export default NotFoundPage;
