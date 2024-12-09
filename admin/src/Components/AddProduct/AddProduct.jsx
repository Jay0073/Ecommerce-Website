import React from "react";
import "./AddProduct.css";

const AddProduct = () => {
    console.log("addproduct accessed")
  return (
    <div className="addproduct">
      <div className="addproduct_itemfield">
        <p>Product title</p>
        <input type="text" name="name" placeholder="Type here" />
      </div>
      <div className="addproduct_price">
        <div className="addproduct_itemfield">
          <p>Price</p>
          <input type="text" name="old_price" placeholder="Type here" />
        </div>
        <div className="addproduct_itemfield">
          <p>Offer Price</p>
          <input type="text" name="new_price" placeholder="Type here" />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
