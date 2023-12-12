import './style.scss';

import classNames from 'classnames';
import React from 'react';

import Button from '~/components/common/Button/Button';
import { formatPrice } from '~/format/price';
import {
  childChairService,
  fullTankService,
  rightWheelService,
} from '~/store/services/constants';

import { placeholder } from './constants';
import ReceiptItem from './ReceiptItem/ReceiptItem';
import { ReceiptProps } from './types';

function Receipt({
  details,
  buttonLabel,
  buttonOnClick,
  buttonDisabled = false,
  buttonDanger = false,
}: ReceiptProps) {
  function getPrice(): string {
    if (details.rate !== null) {
      return formatPrice(details.price, true);
    }
    if (details.car !== null) {
      const min = formatPrice(details.car.priceMin);
      const max = formatPrice(details.car.priceMax, true);
      return `от ${min} до ${max}`;
    }
    return placeholder;
  }

  return (
    <div className="receipt">
      <p className="dark-text fw-500 ta-right fs-3">Ваш заказ:</p>
      <div className="receipt__options">
        <ReceiptItem
          name="Пункт выдачи"
          value={`${details.city?.name || placeholder},\n${
            details.point?.address || placeholder
          }`}
        />
        {details.reachedStage > 0 && (
          <ReceiptItem name="Модель" value={details.car?.name || placeholder} />
        )}
        {details.reachedStage > 1 && (
          <>
            <ReceiptItem
              name="Цвет"
              value={details.color?.label || placeholder}
            />
            <ReceiptItem
              name="Длительность аренды"
              value={
                details.date
                  ? `${details.date.days}д ${details.date.hours}ч`
                  : placeholder
              }
            />
            <ReceiptItem
              name="Тариф"
              value={details.rate?.rateTypeId.name || placeholder}
            />
            {details.isFullTank && (
              <ReceiptItem name={fullTankService.name} value="Да" />
            )}
            {details.isNeedChildChair && (
              <ReceiptItem name={childChairService.name} value="Да" />
            )}
            {details.isRightWheel && (
              <ReceiptItem name={rightWheelService.name} value="Да" />
            )}
          </>
        )}
      </div>
      <p className="dark-text fs-3">
        <span className="fw-500">Цена: </span>
        <span>{details.car ? getPrice() : placeholder}</span>
      </p>
      <Button
        text={buttonLabel}
        onClick={buttonOnClick}
        disabled={buttonDisabled}
        className={classNames('primary', { danger: buttonDanger })}
      />
    </div>
  );
}

export default Receipt;
