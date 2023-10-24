import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-wrapper">
      <div className="card-top">
        <b>{props.title}</b>
        <a href="#">{props.link}</a>
      </div>
      <div className="card-bottom">{props.children}</div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.node,
};
