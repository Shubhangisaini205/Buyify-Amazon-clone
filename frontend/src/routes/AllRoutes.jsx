
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Men from '../User/pages/Products/Men/Men'
import SingleProduct from '../User/pages/Products/SingleProduct'
import Women from '../User/pages/Products/Women/Women'
import Login from "../User/pages/Login";
import Signup from "../User/pages/Signup";
import Cart from "../User/pages/Cart";
import Checkout from "../User/pages/Checkout";
import AllProducts from '../Admin/pages/AllProducts/AllProducts'
import Users from '../Admin/pages/Users/Users'
import Editproduct from '../Admin/pages/Editproduct/Editproduct'
import Addproduct from '../Admin/pages/Addproduct/Addproduct'
import Orders from '../Admin/pages/Orders/Orders'
import Order from '../Admin/pages/Order/Order'
import Home from '../Admin/pages/Home/Home'
import NotFound from '../User/pages/Products/NotFound'

function AllRoutes() {
  return (
    <Routes>
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/admin" element={<Home />}></Route>
      <Route path="/admin/products" element={<AllProducts />}></Route>
      <Route path="/admin/users" element={<Users />}></Route>
      <Route path="/admin/products/:id" element={<Editproduct />}></Route>
      <Route path="/admin/addProduct" element={<Addproduct />}></Route>
      <Route path="/admin/orders/:id" element={<Orders />}></Route>
      <Route path="/admin/singleorder/:id" element={<Order />}></Route>
    </Routes>
  )
}

export default AllRoutes


