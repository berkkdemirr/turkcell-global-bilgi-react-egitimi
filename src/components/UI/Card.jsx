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
