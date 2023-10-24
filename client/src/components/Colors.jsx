import { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;

const Colors = () => {
  const [color, setColor] = useState("#ffffff");
  const ENDPOINT = "https://change-color-socket-server.onrender.com";

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.on("colorChanged", (newColor) => {
      setColor(newColor);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  function handleChangeColor(e) {
    setColor(e.target.value);
    socket.emit("changeColor", e.target.value);
  }

  return (
    <div className="flex justify-between">
      <input type="color" onChange={handleChangeColor} value={color} />
      <div
        style={{
          backgroundColor: color,
          width: "160px",
          height: "160px",
        }}
      ></div>
    </div>
  );
};

export default Colors;
