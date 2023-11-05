import PropTypes from "prop-types";
import "./Modal.css";

export default function Modal({ message, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  message: null
}

Modal.propTypes = {
  message: PropTypes.string,
  closeModal: PropTypes.func.isRequired
}
