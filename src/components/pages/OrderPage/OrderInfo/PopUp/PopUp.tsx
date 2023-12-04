import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { PopUpProps } from './types';

function PopUp({ visible, onConfirm, onCancel }: PopUpProps) {
  const classes = classNames('pop-up', { visible });
  return (
    <div className={classes}>
      <div className="pop-up__content">
        <p className="dark-text fs-4">Подтвердить заказ</p>
        <div className="pop-up__content">
          <button className="btn-large" type="button" onClick={onConfirm}>
            Потвердить
          </button>
          <button
            className="btn-medium orange"
            type="button"
            onClick={onCancel}
          >
            Вернуться
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
