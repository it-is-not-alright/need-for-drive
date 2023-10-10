import './style.scss';

import React from 'react';

import RadioButton from './RadioButton/RadioButton';
import { RadioGroupProps } from './types';

function RadioGroup({ items, selectedItem, onChange }: RadioGroupProps) {
  return (
    <div className="radio-group">
      {items.map((item) => {
        return (
          <RadioButton
            label={item.label}
            key={item.id}
            isActive={item.id === selectedItem.id}
            onClick={() => onChange(item)}
          />
        );
      })}
    </div>
  );
}

export default RadioGroup;
