import { useState } from "react";

function App() {
  const [name, setName] = useState("Emin");

  // let name = "Emin";

  function handleNameChange() {
    // name = "Ali";
    // console.log(name);
    setName("Ali")
  }
  return (
    <div className="app">
      <h1 className="name">{name}</h1>
      <button onClick={handleNameChange}>Title Change</button>
    </div>
  );
}

export default App;
