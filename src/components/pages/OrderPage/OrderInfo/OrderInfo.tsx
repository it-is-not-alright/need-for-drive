import './style.scss';

import React from 'react';

function OrderInfo() {
  return (
    <div id="order-info">
      <p className="dark-text fw-500 ta-right fs-3">Ваш заказ:</p>
      <div id="order-info__options">
        <div id="order-info__option" className="fw-300">
          <p className="dark-text">Пункт выдачи</p>
          <div className="line-dotted" />
          <p className="gray-text">
            <span>Ульяновск,</span>
            <br />
            <span>Нариманова 42</span>
          </p>
        </div>
      </div>
      <p className="dark-text fs-2">
        <span className="fw-500">Цена: </span>
        <span>от 8 000 до 12 000 ₽</span>
      </p>
      <button className="btn-large" type="button">
        Выбрать модель
      </button>
    </div>
  );
}

export default OrderInfo;
