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
  font-family: "Roboto Slab", sans-serif;
`

const InputField = styled.input`
  width: 200px;
  height: 25px;
  border: 1px solid #797979;
  margin: 0 auto;
  text-align: center;
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

const FormContainer = styled.form `
display: flex;
justify-content: center;
margin: 0;
padding: 100px;

`
const StyledH2 = styled.h2 `
    font-family: "Roboto Slab", sans-serif;
    font-size: 1.9em;
`

const StyledButton = styled.button `
  padding: 0 30px;
  cursor: pointer;
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
`

const StyledLink = styled.h4 `
    color: #36443b;
    margin-top: 20px;
    margin-bottom: 60px;
    font-size: 1.2em;
     &:hover {
       color: #0567FB;
     }
`

const StyledBorder = styled.div `
    border-bottom: 4px solid #36443b;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const StyledCategories = styled.p `
    font-size: 1.3em;

`

const CategoriesContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin-bottom: 30px;
`

const DeleteButton = styled.button `
  cursor: pointer;
  padding: 3px;
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
      <StyledBorder>
      <StyledH1>Add a New Category</StyledH1>
      <FormContainer onSubmit={handleSubmit}>
        <br></br>
        <label>
          <InputField
            type="text"
            name="catname"
            value={newCategory.catname}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <StyledButton>Add</StyledButton>
      </FormContainer>
      </StyledBorder>
      <StyledH2>Categories</StyledH2>
      {categories.map((category) => {
        return (
          <CategoriesContainer key={category.id}>
            <StyledCategories>{category.catname}</StyledCategories>
            <DeleteButton onClick={(e) => handleDelete(e, category.id)}>Delete</DeleteButton>
          </CategoriesContainer>
        );
      })}
              <Link exact to="/inventory">
            <StyledLink>Back to Inventory</StyledLink>
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
