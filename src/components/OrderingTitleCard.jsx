import React from 'react';
import Card from './Card';

const OrderingTitleCard = ({ tickets }) => {
  const sortedTickets = [...tickets].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      {sortedTickets.map(ticket => (
        <Card key={ticket.id} tickets={ticket} />
      ))}
    </div>
  );
};

export default OrderingTitleCard;
