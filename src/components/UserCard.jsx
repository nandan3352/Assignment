import React from 'react';
import Card from './Card';
import e from '../icons_FEtask/add.svg';
import f from '../icons_FEtask/3 dot menu.svg';

const UserCard = ({ users, tickets }) => {
  const availableUsers = users.filter(user => user.available);

  return (
    <div style={{ backgroundColor: 'rgb(249, 249, 249)', padding: '20px', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {availableUsers.map(user => {
          const userTickets = tickets.filter(ticket => ticket.userId === user.id);

          return (
            <div key={user.id} style={{ flex: 1, margin: '0 10px', padding: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ textAlign: 'left', color: 'rgb(51, 51, 51)', margin: '0' }}>
                  <span style={{ marginRight: '8px', verticalAlign: 'middle' }}>{user.name}</span>
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
          );
        })}
      </div>
    </div>
  );
};

export default UserCard;
