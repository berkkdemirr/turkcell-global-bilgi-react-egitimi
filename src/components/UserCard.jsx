import React from "react";
import Button from "./UI/Button";
import Username from "./Username";
import PropTypes from "prop-types";

const UserCard = (props) => {
  console.log("usercard rendered");
  return (
    <div>
      <img src="https://robohash.org/stefan-one" alt="avatar" width={100} />
      <br />
      <Username>{props.myUsername}</Username>
      <br />
      <Button title="Kullanıcı Detayına Git" />
    </div>
  );
};

export default React.memo(UserCard);

UserCard.propTypes = {
  myUsername: PropTypes.string.isRequired,
};
