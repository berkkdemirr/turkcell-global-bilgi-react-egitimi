import { useState } from "react";
import "./ProductForm.css";
import { productInitialValues } from "./initialValues";
import { products } from "../../productData";

const ProductForm = (props) => {
  const [productData, setProductData] = useState(productInitialValues);
  const { productTitle, productPrice, imageUrl } = productData;

  function handleChange(event) {
    const { value, name } = event.target;
    setProductData({ ...productData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("post isteği atıldı", productData);
    setProductData(productInitialValues);
    props.setAllProducts((prevState) => [
      ...prevState,
      { ...productData, id: prevState.length + 1 },
    ]);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-input">
        <label>Ürün Adı</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün Adı Giriniz..."
          name="productTitle"
          value={productTitle}
        />
        {productTitle}
      </div>
      <div className="form-input">
        <label>Ürün Fiyatı</label>
        <input
          type="number"
          onChange={handleChange}
          placeholder="Ürün Fiyatı Giriniz..."
          name="productPrice"
          value={productPrice}
        />
        {productPrice}
      </div>
      <div className="form-input">
        <label>Ürün Görseli</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün Görseli Giriniz..."
          name="imageUrl"
          value={imageUrl}
        />
        <img src={imageUrl} alt="" />
      </div>
      <button className="form-button main-btn">Ürün Ekle</button>
    </form>
  );
};

export default ProductForm;
