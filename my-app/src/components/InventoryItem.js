import React from "react";
// import { Link } from "react-router-dom";

const InventoryItem = ({ product }) => {
  console.log(product);
  return (
    <div>
      {/* <h2>{product.name}</h2>
      <span><button>Edit Name</button></span>
      <p>Category: {product.catname}</p>
      <p>Description: {product.description}</p>
      <span><Link key={product.id} to={`/location-editor/${product.id}`}>
        <button>Edit Description</button>
      </Link></span>
      <p>Price: {product.price}</p>
      <p>Source Location: {product.locname}</p> */}

     
    </div>
  );
};

export default InventoryItem;
