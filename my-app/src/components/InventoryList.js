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
 console.log("inventory: ",  inventory)
  return (
    <div>
      <h2>Inventory List</h2>
      <Link exact to="/add-products">
        Add Items
      </Link>
      {inventory.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <span>
            {" "}
            <Link to={`/location-editor/${product.id}`}>
              <button>Edit Name</button>
            </Link>
          </span>
          <p>Category: {product.catname}</p>
          <p>Description: {product.description}</p>
          <span>
            <Link to={`/description-editor/${product.id}`}>
              {" "}
              <button>Edit Description</button>
            </Link>{" "}
          </span>
          <p>Price: {product.price}</p>
        </div>
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
