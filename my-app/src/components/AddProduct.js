import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { addItem } from "../store/actions/actions";
import { connect } from "react-redux";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 50px;
  height: 600px;
  box-shadow: 0 0 10px #262626;
  background-color: whitesmoke;
  font-family: "Roboto Slab", sans-serif;
  font-size: 1em;
`;

const StyledH2 = styled.h2`
  color: #323232;
  font-family: "Roboto Slab", sans-serif;
  font-weight: 600;
  padding: 20px 0;
  font-size: 2em;
  margin-bottom: 40px;
  text-align: center;
`;

const InputField = styled.input`
  width: 200px;
  height: 40px;
  border: 1px solid #797979;
  margin: 8px 0;
  border-radius: 5px;
  background-color: white;
  font-family: "Roboto Slab", sans-serif;

  &:hover {
    border: 3px solid #36443b;
    background-color: white;
    box-shadow: 0 0 1vw #36443b;

    &:focus {
      border: 3px solid #36443b;
      background-color: white;
      box-shadow: 0 0 1vw #36443b;
    }
  }
`;

const StyledDropdown = styled.label`
  width: 200px;
`;

const StyledSelect = styled.select`
  margin-left: 10px;
  margin-bottom: 6px;
`;

const StyledButtons = styled.button`
  padding: 2px 12px;
  background: #999;
  border: none;
  outline: none;
  color: white;
  border-bottom: 2px solid #797979;
`;

const initialFormValues = {
  location_id: 1,
  category_id: 1,
  name: "",
  description: "",
  price: 0.0,
};
function AddProduct({ inventory, addItem, categories }) {
  const [newItem, setNewItem] = useState(initialFormValues);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit is happening");
    console.log("NEWITEM", { newItem });
    addItem(newItem);
    history.push("/inventory");
  };
  const handleChanges = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <StyledH2>Add a new Product</StyledH2>
      <FormContainer onSubmit={handleSubmit}>
        <br></br>
        <label>
          Product name:
          <InputField
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <StyledDropdown>
          Category:
          <span>
            <StyledSelect
              onChange={handleChanges}
              type="number"
              value={newItem.category_id}
              name="category_id"
            >
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.catname}
                  </option>
                );
              })}
            </StyledSelect>
          </span>
        </StyledDropdown>
        <Link exact to="/add-category">
          <span>
            <StyledButtons>Add Category</StyledButtons>
          </span>
        </Link>
        <br></br>
        <label>
          Description:
          <InputField
            type="text"
            name="description"
            value={newItem.description}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <label>
          Price:
          <InputField
            type="number"
            step=".01"
            value={newItem.price}
            name="price"
            placeholder="$0.00"
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <StyledButtons>Submit</StyledButtons>
      </FormContainer>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    inventory: state.inventory,
    categories: state.categories,
  };
}
export default connect(mapStateToProps, { addItem })(AddProduct);
