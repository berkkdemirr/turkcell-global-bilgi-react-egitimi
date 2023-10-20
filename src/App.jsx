import { useState } from "react";
import Modal from "./components/UI/Modal";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <div className="app">
      {isShowModal && <Modal setIsShowModal={setIsShowModal} />}
      <br /><br /><br /><br />
      <button onClick={() => setIsShowModal(true)}>Modal Aç</button>
    </div>
  );
}

export default App;
