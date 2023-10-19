import ProductItem from "./ProductItem";
import "./Products.css";

const productData = [
  {
    id: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqlw759cys5to_58DDt2vgV5PafoDhBI6cQ&usqp=CAU",
    productTitle: "Şapka",
    productPrice: 80,
  },
  {
    id: 2,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZRDVij3RuXMIOrulPp9Z7CsEryJV8yeCIg&usqp=CAU",
    productTitle: "Tisört",
    productPrice: 100,
  },
  {
    id: 3,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkbspNzN2RDUsGzYtfubI6_Vp6EshTlSJJA&usqp=CAU",
    productTitle: "Kamera",
    productPrice: 3000,
  },
];

function Products(props) {
  return (
    <div className="products">
      <h1>{props.componentTitle}</h1>
      <div className="products-list">
        {productData.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}

        {/*  <ProductItem
          imageUrl={productData[0].imageUrl}
          productTitle={productData[0].productTitle}
          productPrice={productData[0].productPrice}
        />
        <ProductItem
          imageUrl={productData[1].imageUrl}
          productTitle={productData[1].productTitle}
          productPrice={productData[1].productPrice}
        />
        <ProductItem
          imageUrl={productData[2].imageUrl}
          productTitle={productData[2].productTitle}
          productPrice={productData[2].productPrice}
        /> */}
      </div>
    </div>
  );
}

export default Products;
