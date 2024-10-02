import React from 'react';
import Card from './Card';
import a from '../icons_FEtask/in-progress.svg';
import b from '../icons_FEtask/To-do.svg';
import c from '../icons_FEtask/Done.svg';
import d from '../icons_FEtask/Cancelled.svg';
import e from '../icons_FEtask/add.svg';
import f from '../icons_FEtask/3 dot menu.svg';

const StatusCard = ({ tickets }) => {
  const groupedTickets = {
    'In Progress': tickets.filter(ticket => ticket.status === 'In progress'),
    'To Do': tickets.filter(ticket => ticket.status === 'Todo'),
    'Done': tickets.filter(ticket => ticket.status === 'Done'),
    'Cancelled': tickets.filter(ticket => ticket.status === 'Backlog'),
  };

  const getIconForStatus = (status) => {
    switch (status) {
      case 'In Progress':
        return a;
      case 'To Do':
        return b;
      case 'Done':
        return c;
      case 'Cancelled':
        return d;
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: 'rgb(249, 249, 249)', padding: '20px', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {Object.entries(groupedTickets).map(([status, userTickets]) => (
          <div key={status} style={{ flex: 1, margin: '0 10px', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ textAlign: 'left', color: 'rgb(51, 51, 51)', margin: '0' }}>
                <img
                  src={getIconForStatus(status)}
                  alt={status}
                  style={{ marginRight: '8px', verticalAlign: 'middle' }}
                />
                {status}
                <span style={{ color: 'rgb(170, 170, 170)', marginLeft: '10px' }}>{userTickets.length}</span>
              </h4>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={e} alt="icon e" style={{ width: '20px', height: '20px', marginLeft: '10px' }} />
                <img src={f} alt="icon f" style={{ width: '20px', height: '20px', marginLeft: '10px' }} />
              </div>
            </div>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              {userTickets.length > 0 ? (
                userTickets.map(ticket => (
                  <Card key={ticket.id} tickets={ticket} />
                ))
              ) : (
                <li></li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusCard;
