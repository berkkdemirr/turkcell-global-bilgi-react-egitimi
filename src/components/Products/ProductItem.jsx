import Button from "../UI/Button";
import "./ProductItem.css";

function ProductItem() {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaXGeoatJyRmP9Aa-q4zaqgcUQim3bQHvjg&usqp=CAU";
  const productTitle = "Portakal";
  const productPrice = 4;

  const date = new Date(2023, 2, 20);

  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  // Tek haneli gün ve aylar için başına "0" ekleyelim.
  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  const formattedDate = `${day}-${month}-${year}`;

  return (
    <div className="product-item">
      <img src={imageUrl} alt="soda" className="product-image" />
      <div className="product-bottom">
        <b className="product-title">{productTitle}</b>
        <span className="product-price">{productPrice}₺</span>
        <span className="product-date">{formattedDate}</span>
        <Button title="Sepete Ekle" />
      </div>
    </div>
  );
}

export default ProductItem;
