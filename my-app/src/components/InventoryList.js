import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import InventoryItem from "./InventoryItem";
import { connect } from "react-redux";
import { fetchInventory } from "../store/actions/actions";

const InventoryList = ({inventory, fetchInventory}) => {

    console.log(inventory);

    // useEffect(() => {
    //     fetchInventory();
    //   }, [fetchInventory]);

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

function mapStateToProps(state) {
    return {
      inventory: state.inventory,
    };
  }
  
  export default connect(mapStateToProps, { fetchInventory})(InventoryList);
