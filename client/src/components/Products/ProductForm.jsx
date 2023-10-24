import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import Modal from "../UI/Modal";
import "./ProductForm.css";
import ValidationText from "../UI/ValidationText";

const ProductForm = (props) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      productTitle: "",
      productPrice: "",
      imageUrl: "",
    },
    validationSchema: Yup.object({
      productTitle: Yup.string().required("Zorunlu bir alan"),
      productPrice: Yup.string().required("Zorunlu bir alan"),
      imageUrl: Yup.string().required("Zorunlu bir alan"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      props.setAllProducts((prevState) => [
        ...prevState,
        { ...values, id: prevState.length + 1 },
      ]);
    },
  });

  return (
    <div>
      {isShowModal && <Modal setIsShowModal={setIsShowModal} />}
      <form className="product-form" onSubmit={formik.handleSubmit}>
        <div className="form-input">
          <label>Ürün Adı</label>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ürün Adı Giriniz..."
            name="productTitle"
            value={formik.values.productTitle}
          />
          {formik.touched.productTitle && formik.errors.productTitle ? (
            <ValidationText errorText={formik.errors.productTitle} />
          ) : null}
        </div>
        <div className="form-input">
          <label>Ürün Fiyatı</label>
          <input
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ürün Fiyatı Giriniz..."
            name="productPrice"
            value={formik.values.productPrice}
          />
          {formik.touched.productPrice && formik.errors.productPrice ? (
            <ValidationText errorText={formik.errors.productPrice} />
          ) : null}
        </div>
        <div className="form-input">
          <label>Ürün Görseli</label>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ürün Görseli Giriniz..."
            name="imageUrl"
            value={formik.values.imageUrl}
          />
          <img src={formik.values.imageUrl} alt="" />
          {formik.touched.imageUrl && formik.errors.imageUrl ? (
            <ValidationText errorText={formik.errors.imageUrl} />
          ) : null}
        </div>
        <button className="form-button main-btn">Ürün Ekle</button>
      </form>
    </div>
  );
};

export default ProductForm;

ProductForm.propTypes = {
  setAllProducts: PropTypes.func.isRequired,
};
