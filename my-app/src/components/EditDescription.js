import React from "react";
import { connect } from "react-redux";
import { editItemDescription } from "../store/actions";

function EditDescription(product) {
  state = {
    description: "",
  };

  handleChanges = (e) => {
    setState({ description: e.target.value });
  };

  handleDescriptionSubmit = (e) => {
    e.preventDefault();
    props.add({ description: state.newCategory });
  };

  return (
    <div>
      <h2>Update Description</h2>
      <form onSubmit={handleDescriptionSubmit}>
        <input
          type="text"
          value={state.description}
          onChange={handleChanges}
          placeholder={state.description}
        />
        <button>Update</button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    description: state.description,
  };
}

export default connect(mapStateToProps, { editItemDescription })(
  EditDescription
);
