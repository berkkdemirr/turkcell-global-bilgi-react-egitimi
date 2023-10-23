import Products from "./components/Products/Products";
import HomePage from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />}
])

function App() {
  return (
    <div className="app">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
