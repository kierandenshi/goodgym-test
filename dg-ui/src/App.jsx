import { useEffect, useState } from 'react';
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
    fetchSessions();
  }, [])

  function fetchSessions() {
    axios.get(`${baseUrl}/sessions.json`).then((response) => {
      setSessions(response.data);
    });
  }

  function joinSession(sessionId) {
    axios.post(`${baseUrl}/registrations.json`, { gym_member_id: currentUser, gym_session_id: sessionId })
      .then(() => {
        fetchSessions();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function leaveSession(sessionId) {
    axios.delete(`${baseUrl}/registrations/${currentUser}/${sessionId}.json`)
      .then(() => {
        fetchSessions();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return currentUser ? (
    <div className="app">
      <div className='app-header'>
        <div className='app-login'>
          <span>Sign in as user:</span>
          <UserSelect users={goodgymers} currentUser={currentUser} onSelect={setCurrentUser} />
        </div>
      </div>

      <div className='app-body'>
        <h2>Available sessions</h2>
        {sessions.map((session) =>
          <SessionCard
            key={session.id}
            session={session}
            currentUser={currentUser}
            joinSession={joinSession}
            leaveSession={leaveSession}
          />
        )}
      </div>
    </div>
  ) : null;
}

export default App;
