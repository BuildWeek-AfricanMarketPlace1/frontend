import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import InventoryList from "./InventoryList";
import AddProduct from "./AddProduct";
import EditName from "./EditName";
import { connect } from "react-redux";


const InventoryPage = () => {

    // useEffect(() => {
    //     fetchInventory();
    //   }, [fetchInventory]);


  return (
    <>
      <Route exact path="/inventory">
        <InventoryList  />
      </Route>

      <Route path="/name-editor/:id">
        <EditName  />
      </Route>

      <Route path="/add-product/:id">
        <AddProduct />
      </Route>
    </>
  );
};

// function mapStateToProps(state) {
//     return {
//       inventory: state.inventory,
//       loadingInventory: state.loadingInventory,
//       errorMessage: state.errorMessage,
//     };
//   }
  
  export default InventoryPage;
