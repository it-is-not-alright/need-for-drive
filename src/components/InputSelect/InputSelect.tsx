import './style.scss';

import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import Icon from '~/components/Icon/Icon';

import { InputSelectItem, InputSelectProps } from './types';

function InputSelect<T>({
  maxLength,
  placeholder,
  items,
  selectedItem,
  onSelect,
}: InputSelectProps<T>) {
  const [value, setValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  const [overlap, setOverlap] = useState<InputSelectItem<T>[]>([]);

  useEffect(() => {
    if (value === '') {
      setOverlap(items);
      return;
    }
    const newValueClear = value.trim().toLowerCase();
    setOverlap(
      items.filter((item) => {
        return item.label.toLowerCase().startsWith(newValueClear);
      }),
    );
  }, [value, items]);

  useEffect(() => {
    setValue(selectedItem ? selectedItem.label : '');
  }, [selectedItem]);

  function handleClearBtnOnClick(): void {
    setValue('');
    onSelect(null);
    setOverlap(items);
  }

  function handleInputOnChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    const newValue: string = event.target.value;
    if (newValue.length > maxLength) {
      return;
    }
    setValue(newValue);
    const newValueClear = newValue.trim().toLowerCase();
    const newSelectedItem: InputSelectItem<T> = items.find(
      (item) => item.label.toLowerCase() === newValueClear,
    );
    onSelect(newSelectedItem);
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

  function handleSelectItemOnClick(item: InputSelectItem<T>): void {
    onSelect(item);
    setFocused(false);
  }

  return (
    <div className={classNames('input-select', { focused })}>
      <div className="input-select__input-shell">
        <input
          placeholder={placeholder}
          value={value}
          onChange={handleInputOnChange}
          onFocus={handleInputOnFocus}
          onBlur={(event) => handleInputOnBlur(event)}
        />
        {value !== '' && (
          <button type="button" onClick={handleClearBtnOnClick}>
            <Icon name="input-select-cross" />
          </button>
        )}
      </div>
      <div className="input-select__select-shell">
        {overlap.length > 0 ? (
          <div className="input-select__select">
            {overlap.map((item) => {
              return (
                <button
                  key={item.label}
                  className="input-select__select-item"
                  onClick={() => handleSelectItemOnClick(item)}
                  type="button"
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default InputSelect;
