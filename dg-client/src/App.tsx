import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const baseUrl = 'http://localhost:4000';

function App() {
  const [gymSessions, setGymSessions] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/sessions.json`).then((response) => {
      setGymSessions(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Gym Sessions</h1>
      <ul>
        {gymSessions.map((gymSession: { id: number; name: string }) => (
          <li key={gymSession.id}>{gymSession.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
