import { useState } from "react";
import "./ProductForm.css";

const ProductForm = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");

  function titleChangeHandler(event) {
    setProductTitle(event.target.value);
  }

  function priceChangeHandler(event) {
    setProductPrice(event.target.value);
  }

  function imageChangeHandler(event) {
    setProductImageUrl(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const productData = {
      title: productTitle,
      price: productPrice,
      imageUrl: productImageUrl,
    };
    console.log("post isteği atıldı",productData);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-input">
        <label>Ürün Adı</label>
        <input
          type="text"
          onChange={titleChangeHandler}
          placeholder="Ürün Adı Giriniz..."
        />
      </div>
      <div className="form-input">
        <label>Ürün Fiyatı</label>
        <input
          type="number"
          onChange={priceChangeHandler}
          placeholder="Ürün Fiyatı Giriniz..."
        />
      </div>
      <div className="form-input">
        <label>Ürün Görseli</label>
        <input
          type="text"
          onChange={imageChangeHandler}
          placeholder="Ürün Görseli Giriniz..."
        />
      </div>
      <button className="form-button main-btn">Ürün Ekle</button>
    </form>
  );
};

export default ProductForm;
