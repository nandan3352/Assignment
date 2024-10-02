import './App.css';
import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import Handler from './components/Handler';
import OrderingHandler from './components/OrderingHandler'; 
function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [option, setOption] = useState(1); 

  useEffect(() => {
    const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setTickets(data.tickets))
      .catch(error => console.error('Error fetching tickets data:', error));
  }, []);

  useEffect(() => {
    const usersApiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';
    fetch(usersApiUrl)
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error fetching users data:', error));
  }, []);

  return (
    <div>
      <TopBar setGroupingAndOrdering={setOption} />
      <div style={{ padding: '20px' }}>
        {option <= 3 ? (
          <Handler 
            groupingOption={option} 
            tickets={tickets} 
            users={users} 
          />
        ) : (
          <OrderingHandler 
            orderingOption={option} 
            tickets={tickets} 
            users={users} 
          />
        )}
      </div>
    </div>
  );
}

export default App;
