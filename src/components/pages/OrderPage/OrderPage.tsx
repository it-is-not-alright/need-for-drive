import React from 'react';
import { useSelector } from 'react-redux';

import newOrderSelector from '~/store/order/new/selectors';

function OrderPage() {
  const { data: newOrder } = useSelector(newOrderSelector);

  return <p>{newOrder.id}</p>;
}

export default OrderPage;
