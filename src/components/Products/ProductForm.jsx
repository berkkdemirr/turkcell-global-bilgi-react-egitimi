import { useState } from "react";
import PropTypes from "prop-types";
import { productInitialValues } from "./initialValues";
import Modal from "../UI/Modal";
import "./ProductForm.css";

const ProductForm = (props) => {
  const [productData, setProductData] = useState(productInitialValues);
  const { productTitle, productPrice, imageUrl } = productData;
  const [isShowModal, setIsShowModal] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    setProductData({ ...productData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      (productTitle.trim().length === 0,
      productPrice.trim().length === 0,
      imageUrl.trim().length === 0)
    ) {
      setIsShowModal(true);
      return;
    }
    console.log("post isteği atıldı", productData);
    setProductData(productInitialValues);
    props.setAllProducts((prevState) => [
      ...prevState,
      { ...productData, id: prevState.length + 1 },
    ]);
  }

  return (
    <div>
      {isShowModal && <Modal setIsShowModal={setIsShowModal} />}
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
    </div>
  );
};

export default ProductForm;

ProductForm.propTypes = {
  setAllProducts: PropTypes.func.isRequired
}
