import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SessionCard from './components/SessionCard';
import UserSelect from './components/UserSelect';
import './normalize.css';
import './App.css';

const baseUrl = 'http://localhost:4000';
function App() {
  const [goodgymers, setGoodgymers] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/goodgymers.json`).then((response) => {
      setGoodgymers(response.data);
      setCurrentUser(response.data[0].id);
    });
  }, [])

  useEffect(() => {
    axios.get(`${baseUrl}/sessions.json`).then((response) => {
      setSessions(response.data);
    });
  }, [])

  return currentUser ? (
    <div className="app">
      <div className='app-header'>
        <h1>GoodGym</h1>
        <div class='app-login'>
          <span>Sign in as user:</span>
          <UserSelect users={goodgymers} currentUser={currentUser} onSelect={setCurrentUser} />
        </div>
      </div>

      <div className='app-body'>
        <h2>Available sessions</h2>
        {sessions.map((session) => <SessionCard key={session.id} session={session} currentUser={currentUser} />)}
      </div>

    </div>
  ) : null;
}

export default App;
