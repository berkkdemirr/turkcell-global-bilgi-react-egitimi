import "./ProductForm.css";

const ProductForm = () => {
  function titleChangeHandler(event) {
    console.log(event.target.value);
  }
  return (
    <form className="product-form">
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
        <input type="number" placeholder="Ürün Fiyatı Giriniz..." />
      </div>
      <div className="form-input">
        <label>Ürün Görseli</label>
        <input type="text" placeholder="Ürün Görseli Giriniz..." />
      </div>
      <button className="form-button main-btn">Ürün Ekle</button>
    </form>
  );
};

export default ProductForm;
