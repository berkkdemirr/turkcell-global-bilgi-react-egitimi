import ProductItem from "./ProductItem";
import "./Products.css";
import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

function Products(props) {
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();



  useEffect(() => {
    async function fetchProducts() {
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
    }
    fetchProducts();
  }, []);

  return (
    <div className="products">
      <ProductForm setAllProducts={setAllProducts} />
      <h1>{props.componentTitle}</h1>
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
