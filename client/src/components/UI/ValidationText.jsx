import PropTypes from "prop-types";

const ValidationText = (props) => {
  return <b className="text-danger">{props.errorText}</b>;
};

export default ValidationText;

ValidationText.propTypes = {
  errorText: PropTypes.string.isRequired,
};
