import { OrderDetails } from '~/store/types';

type ReceiptProps = {
  details: OrderDetails;
  buttonLabel: string;
  buttonOnClick: () => void;
  buttonDisabled?: boolean;
  buttonDanger?: boolean;
};

export { ReceiptProps };
