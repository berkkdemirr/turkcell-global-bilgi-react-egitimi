import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import ProductForm from "./ProductForm";
import "./Products.css";

function Products(props) {
  const [allProducts, setAllProducts] = useState([]);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const fetchProducts = useCallback(async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (res.ok) {
        const data = await res.json();
        const formattedData = data.map(({ title, image, price, ...item }) => {
          return {
            ...item,
            productTitle: title.substr(0, 15),
            imageUrl: image,
            productPrice: price,
          };
        });
        setAllProducts(formattedData);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="products">
      <ProductForm setAllProducts={setAllProducts} />
      <h1>{props.componentTitle}</h1>
      Sepetteki ürün sayısı: {cartItems.length}
      <div className="products-list">
        {allProducts.length === 0 ? (
          <h2>Hiç ürün yok!!!</h2>
        ) : (
          allProducts.map((item) => (
            <ProductItem
              item={item}
              key={item.id}
              setAllProducts={setAllProducts}
              allProducts={allProducts}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Products;

Products.propTypes = {
  componentTitle: PropTypes.string.isRequired,
};

Products.defaultProps = {
  componentTitle: "Products Title",
};
