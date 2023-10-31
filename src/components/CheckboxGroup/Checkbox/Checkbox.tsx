import './style.scss';

import React from 'react';

import Icon from '~/components/Icon/Icon';

import { CheckboxProps } from './types';

function Checkbox({ label }: CheckboxProps) {
  return (
    <div className="checkbox">
      <input type="checkbox" />
      <div className="checkbox-checkmark">
        <Icon name="checkmark" />
      </div>
      <p>{label}</p>
    </div>
  );
}

export default Checkbox;
