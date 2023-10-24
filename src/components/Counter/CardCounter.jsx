import PropTypes from "prop-types";

const CardCounter = (props) => {
  return (
    <div className={`${props.color} mx-auto w-40 text-center rounded-md p-2`}>
      {props.children}
    </div>
  );
};

export default CardCounter;

CardCounter.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};
