import './style.scss';

import React from 'react';

import { Link } from 'react-router-dom';

import Icon from '../Icon/Icon';

function Header() {
  return (
    <header>
      <div id="header__logo">
        <Link className="green-text fw-700" to="/">
          Need for drive
        </Link>
      </div>
      <div id="header__location">
        <Icon name="location" width={18} height={20} />
        <p className="gray-text">Ульяновск</p>
      </div>
    </header>
  );
}

export default Header;
