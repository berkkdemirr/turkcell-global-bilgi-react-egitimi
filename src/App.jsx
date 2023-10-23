import Header from "./components/Layout/Header";
import ProductForm from "./components/Products/ProductForm";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import CartPage from "./pages/Cart";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/product-detail/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
