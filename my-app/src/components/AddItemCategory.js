import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addCategory } from "../store/actions/actions";

const initialValue = {
  catname: "",
};

function AddItemCategory({ categories, addCategory }) {
  const [newCategory, setNewCategory] = useState(initialValue);

  const handleSubmit = (event) => {
    addCategory(newCategory);
  };

  const handleChanges = (event) => {
    setNewCategory({
      ...newCategory,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h2>Add a New Category</h2>
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
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

export default connect(mapStateToProps, { addCategory })(AddItemCategory);
