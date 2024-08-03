// import {  Route, Routes } from 'react-router-dom'
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Iproduct } from "./interface/Iproduct";
import Instance from "./api";
import AddProduct from "./Layouts/admins/pages/AddProduct";
import EditProduct from "./Layouts/admins/pages/EditProduct";
import Home from "./Layouts/admins/pages/Home";
import Register from "./Layouts/admins/pages/UseForm";
import Header from "./Layouts/users/Header";
import Body from "./Layouts/users/Body";
import Footer from "./Layouts/users/Footer";
import { Shop } from "./Layouts/users/Shop";


function App() {
  const [Products, setProducts] = useState<Iproduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await Instance.get("/products");
      setProducts(data);
    })();
  }, []);
  return (
    <>
      {
        <Routes>
          { <Route
            index
            element={<Home Products={Products} setProducts={setProducts} />}
          /> }
          <Route
            path="/add"
            element={<AddProduct setProducts={setProducts} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditProduct Products={Products} setProducts={setProducts} />
            }
          />
          <Route path="/login" element={<Register isLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />

          <Route
            path="/admin"
            element={<Home Products={Products} setProducts={setProducts} />}
          />
        </Routes>
      }
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
