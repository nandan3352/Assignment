import React from 'react';
import Card from './Card';

const OrderingPriorityCard = ({ tickets }) => {
  const sortedTickets = [...tickets].sort((a, b) => b.priority - a.priority);

  return (
    <div>
      {sortedTickets.map(ticket => (
        <Card key={ticket.id} tickets={ticket} />
      ))}
    </div>
  );
};

export default OrderingPriorityCard;
