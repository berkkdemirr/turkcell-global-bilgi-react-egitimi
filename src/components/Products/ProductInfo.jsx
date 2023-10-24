import PropTypes from "prop-types";
import "./ProductInfo.css";
const ProductInfo = (props) => {
  return <div className="product-info">{props.children}</div>;
};

export default ProductInfo;

ProductInfo.propTypes = {
  children: PropTypes.node.isRequired,
};
