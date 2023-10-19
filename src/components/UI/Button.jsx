function Button(props) {
  return (
    <button className={`main-btn ${props.addClass}`}>{props.title}</button>
  );
}

export default Button;
