import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "Jay0073/Ecommerce-Website/admin/src/Components/AddProduct/AddProduct.jsx";

const Admin = () => {
  return (
    <div className="admin">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
        </Routes>
      </BrowserRouter>
      <div className="gotit">hello world</div>
    </div>
  );
};

export default Admin;
