import './style.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { AppRoute } from '~/components/App/types';
import { dateToString } from '~/format/datetime';
import orderDetailsSelector from '~/store/order/details/selectors';
import { resetOrderDetails } from '~/store/order/details/slice';
import { AppDispatch } from '~/store/root';

import Receipt from '../Receipt/Receipt';

function OrderPage() {
  const details = useSelector(orderDetailsSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleReceiptButtonClick = (): void => {
    dispatch(resetOrderDetails());
    navigate(AppRoute.Ordering);
  };

  return (
    <div id="order-page" className="centered-grid">
      <div className="line-horizontal" />
      <p className="dark-text fw-700">Заказ номер RU58491823</p>
      <div className="line-horizontal" />
      <div id="order-page__content">
        <div id="order-page__content__main">
          <div>
            <div>
              <p className="dark-text fs-4">Ваш заказ подтверждён</p>
              <p className="dark-text fs-3">{details.car.name}</p>
              <p className="car-number">{details.car.number}</p>
              <p>
                <span className="fw-700">Топливо </span>
                <span className="fw-300">{`${
                  details.isFullTank ? 100 : details.car.tank
                }%`}</span>
              </p>
              <p>
                <span className="fw-700">Доступна с </span>
                <span className="fw-300">
                  {dateToString(new Date(details.date.from))}
                </span>
              </p>
            </div>
            <img src={details.car.thumbnail.path} alt={details.car.name} />
          </div>
        </div>
        <div className="line-vertical" />
        <Receipt
          details={details}
          buttonLabel="Отменить"
          buttonOnClick={handleReceiptButtonClick}
          buttonDanger
        />
      </div>
    </div>
  );
}

export default OrderPage;
