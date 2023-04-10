// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/user";
import HomePage from "./pages/homepage";
import ProductDetailPage from "./pages/productDetailPage";
import Signin from "./pages/signinPage";
import Signup from "./pages/signupPage";
import AdminLayout from "./components/layout/admin";
import Dashboard from "./pages/dashbroad";
import ProductUpdate from "./pages/product-update";

// 1. Khai báo router react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route path="/" element={<UserLayout />}>
          {" "}
          {/*Layout User */}
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductDetailPage />}></Route>
          <Route path="cart" element={<h1>Cart</h1>}></Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="product/:id" element={<ProductUpdate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
