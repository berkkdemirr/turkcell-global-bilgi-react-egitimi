import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [productDetail, setProductDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function fetchSingleProduct() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${params.productId}`
        );

        if (res.ok) {
          const data = await res.json();
          setProductDetail(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSingleProduct();
  }, [params]);
  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h1>ProductDetailPage</h1>
          <p>
            Ürün Id: <b>{params.productId}</b>{" "}
          </p>
          <br />
          <h2>{productDetail.title}</h2>
          <img
            src={productDetail.image}
            alt={productDetail.title}
            width={200}
          />
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;
