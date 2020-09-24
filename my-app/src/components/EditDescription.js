import React, { useState } from "react";
import { connect } from "react-redux";
import { editItemDescription } from "../store/actions";

const initialItem = {
  user_id: 0,
  location_id: 1,
  category_id: 1,
  name: "",
  description: "",
  price: 0.0,
};

const EditDescription = () => {
  const [updatedItem, setUpdatedItem] = useState(initialItem);

  const handleChanges = (event) => {
    e.persist();
    let value = event.target.value;
    setUpdatedItem({
      ...updatedItem,
      [event.target.name]: value,
    });
  };

  const handleDescriptionSubmit = (e) => {
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
};

function mapStateToProps(state) {
  return {
    description: state.description,
  };
}

export default connect(mapStateToProps, { editItemDescription })(
  EditDescription
);
