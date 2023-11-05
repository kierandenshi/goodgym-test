import PropTypes from "prop-types";

export default function UserSelect({ users, currentUser, onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)} value={currentUser}>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.first_name} {user.last_name}
        </option>
      ))}
    </select>
  );
}

UserSelect.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  currentUser: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
