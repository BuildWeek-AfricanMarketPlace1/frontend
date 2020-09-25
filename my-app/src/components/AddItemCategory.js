import React, { useState } from "react";
import { connect } from "react-redux";
import { addCategory, deleteCategory } from "../store/actions/actions";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  font-family: "Roboto Slab", sans-serif;
`

const StyledH1 = styled.h1 `

`

const initialValue = {
  catname: "",
};

function AddItemCategory({ categories, addCategory, deleteCategory }) {
  const [newCategory, setNewCategory] = useState(initialValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    addCategory(newCategory);
  };

  const handleChanges = (event) => {
    event.preventDefault();
    setNewCategory({
      ...newCategory,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = (event, categoryId) => {
    event.preventDefault();
    deleteCategory(categoryId);
    console.log(categoryId);
  };

  return (
    <StyledContainer>
      <StyledH1>Add a New Category</StyledH1>
      <form onSubmit={handleSubmit}>
        <br></br>
        <label>
          <input
            type="text"
            name="catname"
            value={newCategory.catname}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <button>Add</button>
      </form>
      <h2>Categories</h2>
      {categories.map((category) => {
        return (
          <div key={category.id}>
            <p>{category.catname}</p>
            <button onClick={(e) => handleDelete(e, category.id)}>Delete</button>
          </div>
        );
      })}
              <Link exact to="/inventory">
            <h4>Back to Inventory</h4>
        </Link>
    </StyledContainer>
  );
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

export default connect(mapStateToProps, { addCategory, deleteCategory })(AddItemCategory);
