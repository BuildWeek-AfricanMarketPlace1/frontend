import React from "react";
import { Link } from "react-router-dom";

const InventoryItem = ({ product }) => {
    console.log(product);
  return (
    <div>
      {/* <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Source Location: {product.location}</p>
      <Link key={product.id} to={`/location-editor/${product.id}`}>
        <button>Edit location</button>
      </Link>
      <button>Edit Category</button> */}
    </div>
  );
};

export default InventoryItem;
