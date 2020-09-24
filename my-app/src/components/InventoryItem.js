import React from "react";
import { Link } from "react-router-dom";

const InventoryItem = ({ product }) => {
  console.log(product);
  return (
    <div>
    {/* //   <h2>{product.name}</h2>
    //   <p>Category: {product.catname}</p>
    //   <p>Description: {product.description}</p>
    //   <p>Price: {product.price}</p>
    //   <Link key={product.id} to={`/location-editor/${product.id}`}>
    //     <button>Edit Name</button>
    //   </Link>
    //   <button>Edit Category</button> */}
    </div>
  );
};

export default InventoryItem;
