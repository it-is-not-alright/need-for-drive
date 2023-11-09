import './style.scss';

import classNames from 'classnames';
import React from 'react';

import RadioButton from './RadioButton/RadioButton';
import { RadioGroupProps } from './types';

function RadioGroup({
  name,
  items,
  selectedItem,
  onChange,
  isVertical = false,
}: RadioGroupProps) {
  return (
    <div className={classNames('radio-group', { vertical: isVertical })}>
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
