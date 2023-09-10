import React from 'react';
import './menu-btn.scss';

export default function MenuBtn() {
  function handleOnClick() {
    enum States {
      Collapsed = 'collapsed',
      Expanded = 'expanded',
    }
    const menu: HTMLElement = document.getElementById('menu');
    const classes: DOMTokenList = menu.classList;
    if (classes.contains(States.Collapsed)) {
      classes.replace(States.Collapsed, States.Expanded);
    } else {
      classes.replace(States.Expanded, States.Collapsed);
    }
  }

  return (
    <button className='menu-btn icon-btn' onClick={handleOnClick}>
      <i></i>
    </button>
  );
}
