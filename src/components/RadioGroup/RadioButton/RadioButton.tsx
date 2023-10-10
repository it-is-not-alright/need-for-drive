import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { RadioButtonProps } from './types';

function RadioButton({ label, isActive, onClick }: RadioButtonProps) {
  const classes = classNames('radio-button', { active: isActive });

  return (
    <button className={classes} type="button" onClick={onClick}>
      <div className="radio-button-icon" />
      {label}
    </button>
  );
}

export default RadioButton;
