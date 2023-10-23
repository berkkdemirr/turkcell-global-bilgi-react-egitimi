import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetchSingleProduct() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${params.productId}`
        );

        if (res.ok) {
          const data = await res.json();
          setProductDetail(data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchSingleProduct();
  }, [params]);

  console.log(productDetail);
  return (
    <div>
      <h1>ProductDetailPage</h1>
      <p>
        Ürün Id: <b>{params.productId}</b>{" "}
      </p>
      <br />
      <h2>{productDetail.title}</h2>
      <img src={productDetail.image} alt={productDetail.title} width={200} />
    </div>
  );
};

export default ProductDetailPage;
