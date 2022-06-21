import React from "react";
import SingleProduct from "./SingleProduct";

import productService from "./../../services/ProductsService";
import axios from "axios";
import { Link } from "react-router-dom";


const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  const getData = () => {
    productService
    .getProducts()
    .then((data) => {
      setProducts(data);
    })
    .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);
  //console.log("Inside Products Component");
  const handleNewProductClick = () => {
    console.log(props);
    props.history.push("/products/new");

  }

  return (
    <div>
      <h1>Products</h1>
      <button className="hero-btn" onClick={handleNewProductClick}>Add New</button>
      
      {products.length == 0 ? (
        <p>There are no products</p>
      ) : ( 
      <div>
        {products.map((product, index) => (
        <SingleProduct key={index} product={product} onDelete={getData} />
      ))}
      </div>
      )}
      
      
    </div>
  );
};

export default Products;
