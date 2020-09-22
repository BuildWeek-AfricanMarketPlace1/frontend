import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import InventoryList from "./InventoryList";
import AddLocation from "./AddLocation";
import EditLocations from "./EditLocations";
import { connect } from "react-redux";
import { fetchInventory } from "../store/actions/actions";

const InventoryPage = ({inventory, fetchInventory}) => {

    useEffect(() => {
        fetchInventory();
      }, [fetchInventory]);


  return (
    <>
      <Route exact path="/inventory">
        <InventoryList inventory={inventory} />
      </Route>

      <Route path="/location-editor/:id">
        <EditLocations inventory={inventory} />
      </Route>

      <Route path="/add-location/:id">
        <AddLocation />
      </Route>
    </>
  );
};

function mapStateToProps(state) {
    return {
      inventory: state.inventory,
      loadingInventory: state.loadingInventory,
      errorMessage: state.errorMessage,
    };
  }
  
  export default connect(mapStateToProps, { fetchInventory })(InventoryPage);
