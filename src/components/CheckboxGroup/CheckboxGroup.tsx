import './style.scss';

import React from 'react';

import Checkbox from './Checkbox/Checkbox';
import { CheckboxGroupProps } from './types';

function CheckboxGroup({ items }: CheckboxGroupProps) {
  return (
    <div className="checkbox-group">
      {items.map((item) => {
        return <Checkbox label={item.label} />;
      })}
    </div>
  );
}

export default CheckboxGroup;
