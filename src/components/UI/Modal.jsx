import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    console.log(count);
    /* cleanup function -  Component Unmounting */
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h2>Input boş geçilemez</h2>
      <h3>{count}</h3>
      <button onClick={() => props.setIsShowModal(false)}>Modalı Kapat</button>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  setIsShowModal: PropTypes.func.isRequired,
};
