import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import CartPage from "./pages/Cart";
import ProductDetailPage from "./pages/ProductDetail";
import LoginPage from "./pages/Login";

function App() {
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
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
