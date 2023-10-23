import ProductForm from "./components/Products/ProductForm";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
