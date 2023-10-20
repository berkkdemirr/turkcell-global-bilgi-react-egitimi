import { useState } from "react";
import "./ProductForm.css";
import { productInitialValues } from "./initialValues";

const ProductForm = () => {
  const [productData, setProductData] = useState(productInitialValues);

  function handleChange(event) {
    const { value, name } = event.target;
    setProductData({ ...productData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("post isteği atıldı", productData);
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
        />
      </div>
      <div className="form-input">
        <label>Ürün Fiyatı</label>
        <input
          type="number"
          onChange={handleChange}
          placeholder="Ürün Fiyatı Giriniz..."
          name="productPrice"
        />
      </div>
      <div className="form-input">
        <label>Ürün Görseli</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün Görseli Giriniz..."
          name="imageUrl"
        />
      </div>
      <button className="form-button main-btn">Ürün Ekle</button>
    </form>
  );
};

export default ProductForm;
