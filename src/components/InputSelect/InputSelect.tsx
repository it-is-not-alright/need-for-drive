import './style.scss';

import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import Icon from '~/components/Icon/Icon';
import { IEntity } from '~/store/types';

import { InputSelectProps } from './types';

function InputSelect({
  maxLength,
  placeholder,
  items,
  selectedItem,
  onSelect,
}: InputSelectProps) {
  const [value, setValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  const [overlap, setOverlap] = useState<IEntity[]>([]);

  useEffect(() => {
    setValue(selectedItem ? selectedItem.label : '');
  }, [selectedItem]);

  function refreshOverlap() {
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
  }

  useEffect(() => {
    refreshOverlap();
  }, [value, items]);

  function handleClearBtnClick(): void {
    setValue('');
    onSelect(null);
    setOverlap(items);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const newValue: string = event.target.value;
    if (newValue.length > maxLength) {
      return;
    }
    setValue(newValue);
    const newValueClear = newValue.trim().toLowerCase();
    const newSelectedItem: IEntity | undefined = items.find(
      (item) => item.label.toLowerCase() === newValueClear,
    );
    if (newSelectedItem !== undefined) {
      onSelect(newSelectedItem);
    }
  }

  function handleInputFocus(): void {
    setFocused(true);
  }

  function handleInputBlur(
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

  function handleSelectItemClick(item: IEntity): void {
    onSelect(item);
    setFocused(false);
  }

  return (
    <div className={classNames('input-select', { focused })}>
      <div className="custom-input-wrapper">
        <input
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={(event) => handleInputBlur(event)}
        />
        {value !== '' && (
          <button type="button" onClick={handleClearBtnClick}>
            <Icon name="input-cross" />
          </button>
        )}
      </div>
      <div className="input-select__select-shell">
        {overlap.length > 0 ? (
          <div className="input-select__select">
            {overlap.map((item) => {
              return (
                <button
                  key={item.id}
                  className="input-select__select-item"
                  onClick={() => handleSelectItemClick(item)}
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
