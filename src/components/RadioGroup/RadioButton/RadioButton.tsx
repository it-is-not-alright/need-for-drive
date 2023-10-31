import './style.scss';

import React from 'react';

import { RadioButtonProps } from './types';

function RadioButton({
  groupName,
  label,
  isChecked,
  onChange,
}: RadioButtonProps) {
  return (
    <div className="radio-button">
      <input
        type="radio"
        name={groupName}
        checked={isChecked}
        onChange={onChange}
      />
      <span className="radio-button-checkmark" />
      <p>{label}</p>
    </div>
  );
}

export default RadioButton;
