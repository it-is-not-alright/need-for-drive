import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { ButtonProps } from './types';

function Button({
  text,
  className = 'large',
  onClick = () => {},
  loading = false,
  disabled = false,
}: ButtonProps) {
  const classes = classNames('custom-button', className, { loading });
  return (
    <button
      className={classes}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <p>{text}</p>
    </button>
  );
}

export default Button;
