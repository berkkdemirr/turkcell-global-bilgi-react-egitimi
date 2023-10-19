import "./ProductItem.css";

function ProductItem() {
  return (
    <div className="product-item">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaXGeoatJyRmP9Aa-q4zaqgcUQim3bQHvjg&usqp=CAU"
        alt="soda"
        className="product-image"
      />
      <div className="product-bottom">
        <b className="product-title">Soda</b>
        <span className="product-price">4₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
