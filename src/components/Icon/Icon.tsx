import './icon.scss';

import React from 'react';

import Sprite from '../../assets/sprite.svg';

type IconProps = {
  name: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function Icon({ name, width, height, className }: IconProps) {
  return (
    <svg className={`icon ${className}`} width={width} height={height}>
      <use href={`${Sprite}#${name}`} />
    </svg>
  );
}

Icon.defaultProps = {
  width: undefined,
  height: undefined,
  className: undefined,
};
