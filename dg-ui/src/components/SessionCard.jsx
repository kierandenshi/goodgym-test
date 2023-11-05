import PropTypes from 'prop-types';
import Avatar from './Avatar';
import './SessionCard.css';

export default function SessionCard({
  session: { id, name, description, area, goodgymers }, currentUser, joinSession, leaveSession
}) {
  return (
    <div className='card'>
      <div className='card-header'>
        <span className='card-title blue'>{area.name}</span>
        <span className='card-title'>{name}</span>
      </div>
      <div className='card-body'>
        <p>{description}</p>
        {goodgymers.length ? <>
          <div className='card-avatars'>
            {goodgymers.map(goodgymer => (
              <Avatar key={goodgymer.id} goodgymer={goodgymer} />
            ))}
          </div>
          <div>{attendanceString(goodgymers, currentUser)}</div>
        </> : null}
        {isAttending(goodgymers, currentUser) ? <button onClick={() => leaveSession(id)}>Leave session</button> : <button onClick={() => joinSession(id)}>Join session</button>}
      </div>
    </div>
  );
}

function isAttending(goodgymers, currentUser) {
  return goodgymers.find(goodgymer => goodgymer.id === currentUser);
}

function attendanceString(goodgymers, currentUser) {
  if (isAttending(goodgymers, currentUser)) {
    return goodgymers.length > 2 ? `You and ${goodgymers.length -1} other GoodGymers are going` : `You and 1 other GoodGymer is going`;
  }
  return goodgymers.length > 1 ? `${goodgymers.length} GoodGymers are going` : `1 GoodGymer is going`;
}

SessionCard.propTypes = {
  session: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    area: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    goodgymers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
    }))
  }).isRequired,
  currentUser: PropTypes.string.isRequired,
  joinSession: PropTypes.func.isRequired,
  leaveSession: PropTypes.func.isRequired
}
