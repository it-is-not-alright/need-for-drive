import './style.scss';

import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { AppRoute } from '~/components/App/types';
import PopUp from '~/components/common/PopUp/PopUp';
import orderDetailsSelector from '~/store/order/details/selectors';
import { setCurrentStage, setReachedStage } from '~/store/order/details/slice';
import newOrderSelector from '~/store/order/new/selectors';
import { resetNewOrder } from '~/store/order/new/slice';
import { postOrder } from '~/store/order/new/thunk';
import { AppDispatch } from '~/store/root';

import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import Receipt from '../Receipt/Receipt';
import { breadcrumbsItems, stages } from './constants';
import AdditionalStage from './stages/AdditionalStage/AdditionalStage';
import FinalStage from './stages/FinalStage/FinalStage';
import LocationStage from './stages/LocationStage/LocationStage';
import ModelStage from './stages/ModelStage/ModelStage';

function OrderingPage() {
  const details = useSelector(orderDetailsSelector);
  const [popUpVisible, setPopUpVisible] = useState<boolean>(false);
  const {
    data: newOrder,
    isLoading,
    errorMessage: error,
  } = useSelector(newOrderSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const stageComponents: ReactElement[] = [
    <LocationStage />,
    <ModelStage />,
    <AdditionalStage />,
    <FinalStage />,
  ];

  useEffect(() => {
    if (error === null) {
      return;
    }
    const errorMessage: string = 'Ошибка сервера';
    throw new Error(errorMessage);
  }, [error]);

  useEffect(() => {
    if (newOrder.id === 0) {
      return;
    }
    dispatch(resetNewOrder());
    navigate(AppRoute.Order);
  }, [newOrder]);

  function receiptButtonIsDisabled(): boolean {
    switch (details.currentStage) {
      case 0:
        return details.point === null;
      case 1:
        return details.car == null;
      case 2:
        return details.rate == null;
      default:
        return false;
    }
  }

  const handleReceiptButtonClick = (): void => {
    if (details.currentStage < 3) {
      dispatch(setReachedStage(details.currentStage + 1));
    } else if (details.currentStage === 3) {
      setPopUpVisible(true);
    }
  };

  const createOrder = () => {
    dispatch(postOrder());
  };

  return (
    <div id="ordering-page" className="centered-grid">
      <div className="line-horizontal" />
      <Breadcrumbs
        items={breadcrumbsItems}
        currentIndex={details.currentStage}
        reachedIndex={details.reachedStage}
        onIndexChange={(newIndex: number) =>
          dispatch(setCurrentStage(newIndex))
        }
      />
      <div className="line-horizontal" />
      <div id="ordering-page__content">
        <div id="ordering-page__content__main">
          {stageComponents[details.currentStage]}
        </div>
        <div className="line-vertical" />
        <Receipt
          details={details}
          buttonLabel={stages[details.currentStage].buttonLabel}
          buttonOnClick={handleReceiptButtonClick}
          buttonDisabled={receiptButtonIsDisabled()}
        />
      </div>
      <PopUp
        title="Подтвердить заказ"
        visible={popUpVisible}
        onConfirm={createOrder}
        onCancel={() => setPopUpVisible(false)}
        loading={isLoading}
      />
    </div>
  );
}

export default OrderingPage;
