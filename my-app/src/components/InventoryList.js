import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import InventoryItem from "./InventoryItem";
import { connect } from "react-redux";
import { fetchInventory } from "../store/actions/actions";

const InventoryList = ({ inventory, fetchInventory }) => {
  console.log(inventory);
  console.log(fetchInventory);


  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  return (
    <div>
      <h2>Inventory List</h2>
      <Link exact to="/add-products">
        Add Items
      </Link>
      {inventory.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <InventoryItem product={product} />
        </Link>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    inventory: state.inventory,
  };
}

export default connect(mapStateToProps, { fetchInventory })(InventoryList);
