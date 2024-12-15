import React from "react";
import { useState, useEffect } from "react";
import "./ListProduct.css";
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
    .then((res) => res.json())
    .then((data) => {setAllproducts(data)})
  };

  useEffect(() => {
    fetchInfo();
  }, [])

  const remove_product = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }
  

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct_format_main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct_allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return <div className="listproduct_format_main listproduct_format">
             <img src={product.image} alt="" className="listproduct_product_image" />
             <p>{product.name}</p>
             <p>${product.old_price}</p>
             <p>${product.new_price}</p>
             <p>{product.category}</p>
             <img className="listproduct_remove_icon" onClick={() => {remove_product(product.id)}} src={cross_icon} alt="" />
          </div>
        })}
      </div>
    </div>
  );
};

export default ListProduct;
