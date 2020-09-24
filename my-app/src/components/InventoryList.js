import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import InventoryItem from "./InventoryItem";
import { connect } from "react-redux";
import { fetchInventory } from "../store/actions/actions";

const InventoryList = ({ inventory, fetchInventory }) => {
  console.log(inventory);

<<<<<<< HEAD
    console.log(inventory);

    useEffect(() => {
        fetchInventory();
      }, [fetchInventory]);
=======
  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);
>>>>>>> 80d23e9a2b247413c4ebe60ceb16dcd490f6dfa0

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
  return {
    inventory: state.inventory,
  };
}

export default connect(mapStateToProps, { fetchInventory })(InventoryList);
