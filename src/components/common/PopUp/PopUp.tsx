import './style.scss';

import classNames from 'classnames';
import React from 'react';

import Button from '~/components/common/Button/Button';

import { PopUpProps } from './types';

function PopUp({
  title,
  visible,
  onConfirm,
  onCancel,
  loading = false,
}: PopUpProps) {
  const classes = classNames('pop-up', { visible });
  return (
    <div className={classes}>
      <div className="pop-up__content">
        <p className="dark-text fs-3">{title}</p>
        <div className="pop-up__button_div">
          <Button text="Подтвердить" onClick={onConfirm} loading={loading} />
          <Button
            text="Вернуться"
            className="medium orange"
            onClick={onCancel}
          />
        </div>
      </div>
    </div>
  );
}

export default PopUp;
