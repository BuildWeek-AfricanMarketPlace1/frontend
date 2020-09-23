import React, { useState } from "react";
import { connect } from "react-redux";
import { addCategory } from "../store/actions/actions";

const initialValue = {
  catname: "",
};

function AddItemCategory({ category, addCategory }) {
  const [newCategory, setNewCategory] = useState(initialValue);

  const handleChanges = (event) => {
    addCategory(newCategory);
  };

  const handleSubmit = (event) => {
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
            name="category"
            value={newCategory.catname}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <button>Add</button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

export default connect(mapStateToProps, { addCategory })(AddItemCategory);
