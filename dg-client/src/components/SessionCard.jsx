import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import './SessionCard.css';

// TODO: clean up double use of Array.find
export default function SessionCard({ session: { name, area, goodgymers }, currentUser }) {
  return (
    <div className='card'>
      <div className='card-header'>
        <span className='card-title'>{area.name}</span>
        <span className='card-title'>{name}</span>
      </div>
      <div className='card-body'>
        <p>
          Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        {goodgymers.length ? <>
          <div className='card-avatars'>
            {goodgymers.map(goodgymer => (
              <Avatar key={goodgymer.id} goodgymer={goodgymer} />
            ))}
          </div>
          <div>{attendanceString(goodgymers, currentUser)}</div>
        </> : null}
        {!goodgymers.find(goodgymer => goodgymer.id === currentUser) ? <button>Register</button> : null}
      </div>
    </div>
  );
}

function attendanceString(goodgymers, currentUser) {
  if (goodgymers.find(goodgymer => goodgymer.id === currentUser)) {
    return goodgymers.length > 1 ? `You and ${goodgymers.length} other GoodGymers are going` : `You and 1 other GoodGymer is going`;
  }
  return goodgymers.length > 1 ? `${goodgymers.length} GoodGymers are going` : `1 GoodGymer is going`;
}

SessionCard.propTypes = {
  session: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    area: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    goodgymers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
    }))
  }).isRequired
}
