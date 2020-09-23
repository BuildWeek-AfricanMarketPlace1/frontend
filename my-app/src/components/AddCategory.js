import React from "react";
import { connect } from "react-redux";
import { ADD_CATEGORY } from "../store/actions";

function AddCategory(product) {
  state = {
    newCategory: "",
  };

  handleChanges = (e) => {
    setState({ newCategory: e.target.value });
  };

  handleCategorySubmit = (e) => {
    e.preventDefault();
    props.ADD_CATEGORY({ name: state.newCategory });
  };

  return (
    <>
      <div>
        {props.categories.map((category, id) => (
          <h4 key={id}>{catname}</h4>
        ))}
      </div>
      <form onSubmit={handleCategorySubmit}>
        <input
          type="text"
          value={state.newCategory}
          onChange={handleChanges}
          placeholder="Add new category"
        />
        <button>Add Category</button>
      </form>
    </>
  );
}

export default connect(mapStateToProps, { FETCH_CATEGORIES, ADD_CATEGORY })(
  AddCategory
);
