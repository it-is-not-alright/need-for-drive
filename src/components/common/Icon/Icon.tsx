import classNames from 'classnames';
import React from 'react';

import Sprite from '~/assets/sprite.svg';

import { IconProps } from './types';

function Icon({ name, width, height, className }: IconProps) {
  const classes: string = classNames('icon', { [className]: className });
  return (
    <svg className={classes} width={width} height={height}>
      <use href={`${Sprite}#${name}`} />
    </svg>
  );
}

export default Icon;
