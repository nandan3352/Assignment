import React from 'react';
import Card from './Card';
import e from '../icons_FEtask/add.svg';
import f from '../icons_FEtask/3 dot menu.svg';
import g from '../icons_FEtask/No-priority.svg';
import k from '../icons_FEtask/SVG - Urgent Priority colour.svg';
import h from '../icons_FEtask/Img - High Priority.svg';
import i from '../icons_FEtask/Img - Medium Priority.svg';
import j from '../icons_FEtask/Img - Low Priority.svg';

const PriorityCard = ({ tickets }) => {
  const groupedTickets = {
    'No Priority': tickets.filter(ticket => ticket.priority === 0),
    'Urgent': tickets.filter(ticket => ticket.priority === 4),
    'High': tickets.filter(ticket => ticket.priority === 3),
    'Medium': tickets.filter(ticket => ticket.priority === 2),
    'Low': tickets.filter(ticket => ticket.priority === 1),
  };

  const getIconForPriority = (priority) => {
    switch (priority) {
      case 'No Priority':
        return g;
      case 'Urgent':
        return k;
      case 'High':
        return h;
      case 'Medium':
        return i;
      case 'Low':
        return j;
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: 'rgb(249, 249, 249)', padding: '20px', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {Object.entries(groupedTickets).map(([priority, userTickets]) => (
          <div key={priority} style={{ flex: 1, margin: '0 10px', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ textAlign: 'left', color: 'rgb(51, 51, 51)', margin: '0' }}>
                <img src={getIconForPriority(priority)} alt={priority} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                <span style={{ marginRight: '8px', verticalAlign: 'middle' }}>{priority}</span>
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

export default PriorityCard;
