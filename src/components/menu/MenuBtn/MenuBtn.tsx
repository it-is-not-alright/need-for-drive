import './menu-btn.scss';

import React, {
  MouseEventHandler,
  ReactElement,
  useEffect,
  useState,
} from 'react';

import Icon from '../../Icon/Icon';
import MenuStates from '../MenuStates';

type MenuBtnProps = {
  menuState: MenuStates;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function MenuBtn({ menuState, onClick }: MenuBtnProps) {
  const [screenType, setScreenType] = useState<string>('mobile');

  function refreshScreenType(): void {
    let newScreenType: string;
    if (window.innerWidth >= 1024) {
      newScreenType = 'desktop';
    } else if (window.innerWidth >= 600) {
      newScreenType = 'tablet';
    } else {
      newScreenType = 'mobile';
    }
    setScreenType(newScreenType);
  }

  useEffect(() => {
    refreshScreenType();
    window.addEventListener('resize', () => {
      refreshScreenType();
    });
  }, []);

  function getIcon(): ReactElement {
    let name: string = 'menu-cross';
    if (menuState === MenuStates.Collapsed) {
      name = `menu-${screenType}`;
    }
    return <Icon name={name} />;
  }

  return (
    <button id="menu-btn" className="btn-icon" onClick={onClick} type="button">
      {getIcon()}
    </button>
  );
}
