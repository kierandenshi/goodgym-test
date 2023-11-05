import PropTypes from 'prop-types';
import './Avatar.css';

export default function Avatar({ goodgymer: { first_name, last_name } }) {
  return (
    <div className='avatar' title={`${first_name} ${last_name}`}>
      <span>{first_name[0]}{last_name[0]}</span>
    </div>
  );
}

Avatar.propTypes = {
  goodgymer: PropTypes.shape({
    id: PropTypes.string,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired
  }).isRequired
}
