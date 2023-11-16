import './style.scss';

import React from 'react';

import Icon from '~/components/Icon/Icon';

import { CheckboxProps } from './types';

function Checkbox({ label, onChange, checked }: CheckboxProps) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        onChange={(event) => onChange(event.target.checked)}
        checked={checked}
      />
      <div className="checkbox-checkmark">
        <Icon name="checkmark" />
      </div>
      <p>{label}</p>
    </div>
  );
}

export default Checkbox;
