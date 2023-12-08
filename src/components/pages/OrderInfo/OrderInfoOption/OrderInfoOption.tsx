import './style.scss';

import React from 'react';

import { OrderInfoOptionProps } from './types';

function OrderInfoOption({ name, value }: OrderInfoOptionProps) {
  return (
    <div className="order-info-option fw-300">
      <p className="dark-text">{name}</p>
      <div className="line-dotted" />
      <p className="gray-text">{value}</p>
    </div>
  );
}

export default OrderInfoOption;
