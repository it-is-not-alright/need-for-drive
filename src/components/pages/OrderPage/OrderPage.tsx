import './style.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import ApiError from '~/api/ApiError';
import { AppRoute } from '~/components/App/types';
import Spinner from '~/components/common/Spinner/Spinner';
import { dateToString } from '~/convert/date';
import orderSelector from '~/store/order/selectors';
import { getOrder } from '~/store/order/thunk';
import { resetOrderDetails } from '~/store/ordering-details/slice';
import { AppDispatch } from '~/store/root';

import Receipt from '../Receipt/Receipt';
import { OrderPageParams } from './types';

function OrderPage() {
  const navigate = useNavigate();
  const params = useParams<OrderPageParams>();
  const dispatch = useDispatch<AppDispatch>();
  const { data: details, isLoading, errorMessage } = useSelector(orderSelector);

  useEffect(() => {
    const orderId: number = parseInt(params.id, 10);
    dispatch(getOrder(orderId));
  }, [params]);

  useEffect(() => {
    if (errorMessage !== null) {
      throw new ApiError(errorMessage);
    }
  }, [errorMessage]);

  const handleReceiptButtonClick = (): void => {
    dispatch(resetOrderDetails());
    navigate(AppRoute.Ordering);
  };

  return (
    <div id="order-page" className="centered-grid">
      <div className="line-horizontal" />
      <p className="dark-text fw-700">Заказ номер {params.id}</p>
      <div className="line-horizontal" />
      {!isLoading ? (
        <div id="order-page__content">
          <div id="order-page__content__main">
            <div>
              <div>
                <p className="dark-text fs-4">Ваш заказ подтверждён</p>
                <p className="dark-text fs-3">{details.car?.name}</p>
                <p className="car-number">{details.car?.number}</p>
                <p>
                  <span className="fw-700">Топливо </span>
                  <span className="fw-300">{`${
                    details.isFullTank ? 100 : details.car?.tank
                  }%`}</span>
                </p>
                <p>
                  <span className="fw-700">Доступна с </span>
                  <span className="fw-300">
                    {dateToString(new Date(details.date?.from))}
                  </span>
                </p>
              </div>
              <img src={details.car?.thumbnail.path} alt={details.car?.name} />
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
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default OrderPage;
