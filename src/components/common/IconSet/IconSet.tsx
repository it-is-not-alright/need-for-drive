import React from 'react';

import Sprite from '~/assets/sprite.svg';

import { IconSetProps } from './types';

function IconSet({ names }: IconSetProps) {
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

export default IconSet;
