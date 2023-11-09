import './style.scss';

import React from 'react';

import RadioButton from './RadioButton/RadioButton';
import { RadioGroupProps } from './types';

function RadioGroup({ name, items, selectedItem, onChange }: RadioGroupProps) {
  return (
    <div className="radio-group">
      {items.map((item) => {
        return (
          <RadioButton
            groupName={name}
            label={item.label}
            key={item.id}
            isChecked={selectedItem !== null && item.id === selectedItem.id}
            onChange={() => onChange(item)}
          />
        );
      })}
    </div>
  );
}

export default RadioGroup;
