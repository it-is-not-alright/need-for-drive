import './nav-block.scss';

import React from 'react';

import Icon from '../../Icon/Icon';

export default function NavBlock() {
  return (
    <div id="nav-block">
      <p className="white-text">ПАРКОВКА</p>
      <p className="white-text">СТРАХОВКА</p>
      <p className="white-text">БЕНЗИН</p>
      <p className="white-text">ОБСЛУЖИВАНИЕ</p>
      <div id="nav-block__btn-block">
        <button className="btn-icon" type="button">
          <Icon name="telegram" width={32} height={32} />
        </button>
        <button className="btn-icon" type="button">
          <Icon name="facebook" width={32} height={32} />
        </button>
        <button className="btn-icon" type="button">
          <Icon name="instagram" width={32} height={32} />
        </button>
      </div>
    </div>
  );
}
