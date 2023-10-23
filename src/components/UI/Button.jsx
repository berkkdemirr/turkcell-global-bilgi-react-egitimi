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
