import { useState } from "react";
import "./ProductForm.css";
import { productInitialValues } from "./initialValues";

const ProductForm = () => {
  const [productData, setProductData] = useState(productInitialValues);
  const { productName, productPrice, imageUrl } = productData;

  function handleChange(event) {
    const { value, name } = event.target;
    setProductData({ ...productData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("post isteği atıldı", productData);
    setProductData(productInitialValues);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-input">
        <label>Ürün Adı</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün Adı Giriniz..."
          name="productName"
          value={productName}
        />
        {productName}
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
