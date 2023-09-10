import React from 'react';
import MenuBtn from './menu_btn/MenuBtn';
import LangBtn from './lang_btn/LangBtn';
import NavBlock from './nav_block/NavBlock';
import './menu.scss';

export default function Menu() {
  return (
    <div id='menu' className='collapsed'>
      <div className='menu__sidebar'>
        <MenuBtn />
        <LangBtn />
      </div>
      <div className='menu__container'>
        <div className='menu__container__content'>
          <NavBlock />
          <LangBtn />
        </div>
      </div>
    </div>
  );
}
