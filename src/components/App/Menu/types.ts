enum MenuState {
  Collapsed = 'collapsed',
  Expanded = 'expanded',
}

type MenuProps = {
  isLimited: boolean;
};

export { MenuProps, MenuState };
