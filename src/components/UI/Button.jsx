import PropTypes from "prop-types"

function Button(props) {
  return (
    <button
      className={`main-btn ${props.addClass}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.icon}
      {props.title}
    </button>
  );
}

export default Button;

Button.propTypes = {
  addClass: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired
}
