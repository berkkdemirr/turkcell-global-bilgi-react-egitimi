import { Fragment } from "react"
import Products from "../components/Products/Products"

const ProductsPage = (props) => {
  return (
    <Fragment>
        <h1>Products Page</h1>
        <Products setCartItems={props.setCartItems} cartItems={props.cartItems} />
    </Fragment>
  )
}

export default ProductsPage