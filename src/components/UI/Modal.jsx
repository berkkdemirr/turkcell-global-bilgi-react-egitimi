const Modal = (props) => {
  return (
    <div>
      <h2>Input boş geçilemez</h2>
      <button onClick={() => props.setIsShowModal(false)}>Modalı Kapat</button>
    </div>
  );
};

export default Modal;
