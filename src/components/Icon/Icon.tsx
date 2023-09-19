import './style.scss';

import React from 'react';
import classNames from 'classnames';

import Sprite from '../../assets/sprite.svg';
import IconProps from './types';

export default function Icon({ name, width, height, className }: IconProps) {
  const classes: string = classNames('icon', { [className]: className });
  return (
    <svg className={classes} width={width} height={height}>
      <use href={`${Sprite}#${name}`} />
    </svg>
  );
}
