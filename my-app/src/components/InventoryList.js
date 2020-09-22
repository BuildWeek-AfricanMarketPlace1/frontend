import React from "react";
import { Link } from "react-router-dom";
import InventoryItem from "./InventoryItem";

const InventoryList = ({ inventory }) => {
    // useEffect(()=>{
    //     axiosWithAuth()
    //     .get('/api/')
    //     .then((response)=>{
    //         setInventory(response.data)
    //     })
    //     .catch((error)=>{
    //         console.log("error get", error)
    //     })
    // }, [])
  return (
    <div>
      {inventory.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <InventoryItem product={product} />
        </Link>
      ))}
    </div>
  );
};

export default InventoryList;
