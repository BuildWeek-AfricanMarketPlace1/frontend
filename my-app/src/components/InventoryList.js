import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchInventory, deleteItem } from "../store/actions/actions";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 60px 0;
`;

const StyledCard = styled.div`
  background: WHITESMOKE;
  border-radius: 2px;
  height: 300px;
  margin: 1rem;
  padding: 1rem;
  width: 40%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  h2 {
    text-align: center;
    color: black;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: darkblue;
      transition: all 0.5s ease-in-out;
    }
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  padding: 5px;
  background: #999;
  font-family: "Roboto Slab", sans-serif;
  font-size: 0.75em;
  border: none;
  outline: none;
  color: white;
  border-bottom: 2px solid #797979;
  margin-left: 20px;

  &:hover {
    background-color: #a1a1a1;
  }

  &:active {
    background-color: #888;
  }
`;

const StyledNames = styled.h2 `
    margin: 0;
`
const StyledLine = styled.p `
    margin: 10px auto;
`

const StyledH1 = styled.h1 `
font-family: "Roboto Slab", sans-serif;
padding: 20px 0;
`

const InventoryList = ({ inventory, fetchInventory, deleteItem }) => {
  console.log(inventory);
  console.log(fetchInventory);

  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);
  console.log("inventory: ", inventory);

  const handleDelete = (event, productId) => {
    event.preventDefault();
    deleteItem(productId);
    console.log(productId);
  };

  return (
    <StyledDiv>
      <StyledH1>Inventory List</StyledH1>
      <Link exact to="/add-products">
        <p style={{paddingBottom: "20px"}}>Add Items</p>
      </Link>
      {inventory.map((product) => (
        <StyledCard key={product.id}>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", borderBottom: "3px solid #797979", margin: "10px auto", lineHeight: "2"}}>
            <StyledNames styled={{margin: "0"}}>{product.name}</StyledNames>
            <span>
              <Link to={`/name-editor/${product.id}`}>
                <StyledButton style={{padding: "0 5px"}}>Edit</StyledButton>
              </Link>
            </span>
          </div>
          <StyledLine>Category: {product.catname}</StyledLine>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", margin: "10px auto"}}>
          <p>Description: {product.description}</p>
          <span>
            <Link to={`/description-editor/${product.id}`}>
              <StyledButton style={{padding: "0 5px"}}>Edit</StyledButton>
            </Link>
          </span>
          </div>
          <StyledLine>Price: ${product.price}</StyledLine>
          <StyledButton style={{margin: "10px auto", padding: "0 5px"}} onClick={(e) => handleDelete(e, product.id)}>
            Delete
          </StyledButton>
        </StyledCard>
      ))}
    </StyledDiv>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    inventory: state.inventory,
  };
}

export default connect(mapStateToProps, { fetchInventory, deleteItem })(
  InventoryList
);
