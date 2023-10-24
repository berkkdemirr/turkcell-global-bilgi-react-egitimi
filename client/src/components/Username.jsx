import PropTypes from "prop-types";

const Username = (props) => {
  console.log("username rendered");
  return <b>{props.children}</b>;
};

export default Username;

Username.propTypes = {
  children: PropTypes.node.isRequired,
};
