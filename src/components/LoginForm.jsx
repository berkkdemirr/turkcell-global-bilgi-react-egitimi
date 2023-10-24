import { useFormik } from "formik";
import Button from "./UI/Button";
import * as Yup from "yup";
import ValidationText from "./UI/ValidationText";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Zorunlu bir alan")
        .email("Geçersiz e-posta adresi"),
      password: Yup.string()
        .required("Zorunlu bir alan")
        .min(6, "Şifre en az 6 karakter olmalıdır"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-item">
        <label htmlFor="email">E-posta:</label> <br />
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <br />
        {formik.touched.email && formik.errors.email ? (
          <ValidationText errorText={formik.errors.email} />
        ) : null}
      </div>
      <div className="form-item">
        <label htmlFor="password">Şifre:</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <br />
        {formik.touched.password && formik.errors.password ? (
          <ValidationText errorText={formik.errors.password} />
        ) : null}
      </div>
      <br />
      <Button title="Giriş Yap" />
    </form>
  );
};

export default LoginForm;
