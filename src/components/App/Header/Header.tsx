import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '~/components/common/Icon/Icon';

import { AppRoute } from '../types';

function Header() {
  return (
    <div className="centered-grid">
      <header>
        <div id="header__logo">
          <Link className="green-text fw-700" to={AppRoute.Main}>
            Need for drive
          </Link>
        </div>
        <div id="header__location">
          <Icon name="location" width={18} height={20} />
          <p className="gray-text">Ульяновск</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
