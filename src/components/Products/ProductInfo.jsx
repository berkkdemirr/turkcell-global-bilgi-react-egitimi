import "./ProductInfo.css"
const ProductInfo = (props) => {
  return (
    <div className="product-info">
        {props.children}
        <span>turkcell.com</span>
    </div>
  )
}

export default ProductInfo