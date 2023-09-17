import './icon.scss';

import React from 'react';

import Sprite from '../../assets/sprite.svg';

type IconProps = {
  name: string;
  width?: number;
  height?: number;
  className?: string;
};

function Icon({ name, width, height, className }: IconProps) {
  let classes: string = 'icon';
  if (className) {
    classes += ` ${className}`;
  }
  return (
    <svg width={width} height={height} className={classes}>
      <use href={`${Sprite}#${name}`} />
    </svg>
  );
}

Icon.defaultProps = {
  width: undefined,
  height: undefined,
  className: undefined,
};

export default Icon;
