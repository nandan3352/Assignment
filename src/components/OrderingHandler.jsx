import React from 'react';
import OrderingPriorityCard from './OrderingPriorityCard';
import OrderingTitleCard from './OrderingTitleCard';

const OrderingHandler = ({ orderingOption, tickets, users }) => {
  return (
    <div>
      {orderingOption === 5 && <OrderingPriorityCard tickets={tickets} />}
      {orderingOption === 6 && <OrderingTitleCard tickets={tickets} />}
    </div>
  );
};

export default OrderingHandler;
