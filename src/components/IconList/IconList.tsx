import './style.scss';

import React from 'react';

import Sprite from '../../assets/sprite.svg';
import IconListProps from './types';

function IconList({ names }: IconListProps) {
  return (
    <svg className="icon">
      {names.map((name) => {
        return (
          <use href={`${Sprite}#${name}`} id={`icon-${name}`} key={name} />
        );
      })}
    </svg>
  );
}

export default IconList;
