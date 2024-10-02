import React from 'react';
import UserCard from './UserCard';
import PriorityCard from './PriorityCard';
import StatusCard from './StatusCard';

const Handler = ({ groupingOption, tickets, users }) => {
  if (groupingOption === 0) {
    return <p></p>;
  }

  switch (groupingOption) {
    case 1: 
      return <StatusCard tickets={tickets} />;
    case 2: 
      return <UserCard users={users} tickets={tickets} />;
    case 3: 
      return <PriorityCard tickets={tickets} />;
    default:
      return null;
  }
};

export default Handler;
