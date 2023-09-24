import './style.scss';

import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import Icon from '../Icon/Icon';
import InputSelectProps from './types';

function InputSelect({
  placeholder,
  value,
  setValue,
  items,
  id,
}: InputSelectProps) {
  const [focused, setFocused] = useState<boolean>(false);
  const [overlap, setOverlap] = useState<string[]>(items);

  useEffect(() => {
    function isMatches(item: string): boolean {
      if (item.toLowerCase().startsWith(value.toLowerCase())) {
        return true;
      }
      return false;
    }
    setOverlap(items.filter(isMatches));
  }, [value]);

  function handleClearBtnOnClick(): void {
    setValue('');
  }

  function handleInputOnChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setValue(event.target.value);
  }

  function handleInputOnFocus(): void {
    setFocused(true);
  }

  function handleInputOnBlur(
    event: React.FocusEvent<HTMLInputElement, Element>,
  ): void {
    if (event.relatedTarget === null) {
      setFocused(false);
      return;
    }
    const { classList } = event.relatedTarget;
    if (classList.contains('input-select__select-item')) {
      event.preventDefault();
    } else {
      setFocused(false);
    }
  }

  function handleSelectItemOnClick(item: string): void {
    setValue(item);
    setFocused(false);
  }

  return (
    <div className={classNames('input-select', { focused })} id={id}>
      <div className="input-select__input-shell">
        <input
          placeholder={placeholder}
          value={value}
          onChange={handleInputOnChange}
          onFocus={handleInputOnFocus}
          onBlur={(event) => handleInputOnBlur(event)}
        />
        {value !== '' ? (
          <button type="button" onClick={handleClearBtnOnClick}>
            <Icon name="input-select-cross" />
          </button>
        ) : null}
      </div>
      <div className="input-select__select-shell">
        <div className="input-select__select">
          {overlap.map((item) => {
            return (
              <button
                key={item}
                className="input-select__select-item"
                onClick={() => handleSelectItemOnClick(item)}
                type="button"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InputSelect;
