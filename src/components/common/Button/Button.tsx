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
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!loading) {
      onClick(event);
    }
  };

  return (
    <button
      className={classNames('custom-button', className, { loading })}
      type="button"
      onClick={handleClick}
      disabled={disabled}
    >
      <p>{text}</p>
    </button>
  );
}

export default Button;
