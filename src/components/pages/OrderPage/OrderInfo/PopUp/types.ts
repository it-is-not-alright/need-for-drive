type PopUpProps = {
  title: string;
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
};

export { PopUpProps };
