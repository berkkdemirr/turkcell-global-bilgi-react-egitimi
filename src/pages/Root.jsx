import React, { Fragment } from 'react'
import Header from '../components/Layout/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = (props) => {
  return (
    <Fragment>
        <Header cartItems={props.cartItems} />
        <Outlet />
    </Fragment>
  )
}

export default RootLayout