import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CartProvider from "./context/CartProvider";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
