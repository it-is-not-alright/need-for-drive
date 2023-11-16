import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { formatPrice } from '~/format/price';

import { ModelBoxProps } from './types';

function ModelBox({ model, isActive, onClick }: ModelBoxProps) {
  const price = `${formatPrice(model.priceMin)} - ${formatPrice(
    model.priceMax,
    true,
  )}`;
  const classes: string = classNames('model-box', { active: isActive });
  return (
    <div
      className={classes}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={model.id}
    >
      <p className="dark-text fs-2">{model.name}</p>
      <p className="gray-text fw-300">{price}</p>
      <img src={model.thumbnail.path} alt={model.name} />
    </div>
  );
}

export default ModelBox;
