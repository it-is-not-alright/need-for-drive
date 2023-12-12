import './style.scss';

import React from 'react';

import { ReceiptItemProps } from './types';

function ReceiptItem({ name, value }: ReceiptItemProps) {
  return (
    <div className="receipt-option fw-300">
      <p className="dark-text">{name}</p>
      <div className="line-dotted" />
      <p className="gray-text">{value}</p>
    </div>
  );
}

export default ReceiptItem;
