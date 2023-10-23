import Header from "./components/Layout/Header";
import ProductForm from "./components/Products/ProductForm";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import CartPage from "./pages/Cart";
import ProductDetailPage from "./pages/ProductDetail";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/product-detail/:productId"
              element={<ProductDetailPage />}
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
