import './style.scss';

import React from 'react';

import Checkbox from './Checkbox/Checkbox';
import { CheckboxGroupProps } from './types';

function CheckboxGroup({ items, selectedItems, onChange }: CheckboxGroupProps) {
  return (
    <div className="checkbox-group">
      {items.map((item) => {
        const overlap = selectedItems.find(
          (selectedItem) => selectedItem.id === item.id,
        );
        return (
          <Checkbox
            label={item.label}
            key={item.id}
            onChange={(checked) => onChange(item, checked)}
            checked={overlap !== undefined}
          />
        );
      })}
    </div>
  );
}

export default CheckboxGroup;
