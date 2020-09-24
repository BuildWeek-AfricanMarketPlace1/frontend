import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addCategory, fetchItemCategories } from "../store/actions/actions";

const initialValue = {
  catname: "",
};

function AddItemCategory({ category, addCategory, fetchItemCategories }) {
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

  useEffect(() => {
    fetchItemCategories();
  }, [fetchItemCategories]);

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
      {category.map((cat) => {
        return (
          <div key={cat.id}>
            <p>{cat.name}</p>
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    category: state.category,
  };
}

export default connect(mapStateToProps, { addCategory })(AddItemCategory);
