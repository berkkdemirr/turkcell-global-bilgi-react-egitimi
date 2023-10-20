import { useState } from "react";
import Button from "./components/UI/Button";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  async function getUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log("işlem tamamlandı");
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="app">
      <Button title="Kullanıcıları Getir" onClick={getUsers} />
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
}

export default App;

// function getUsers() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       const findUser = data.filter((user) => user.username.length > 8);
//       console.log(findUser);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("işlem tamamlandı");
//     });
// }
