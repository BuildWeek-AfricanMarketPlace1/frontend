import React, { useState } from "react";
import { connect } from "react-redux";
import { editName } from "../store/actions/actions";

const initialItem = {
  name: "",
  locname: "",
  catname: "",
  description: "",
  price: 0.0,
};

const UpdateName = () => {
  const [updatedItem, setUpdatedItem] = useState(initialItem);

  const handleChanges = (event) => {
    event.persist();
    let value = event.target.value;
    setUpdatedItem({
      ...updatedItem,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    editName()
  };

  return (
    <div>
      {/* <h2>Edit Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.name}
          onChange={handleChanges}
          placeholder={state.name}
        />
        <button>Update</button>
      </form> */}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

export default connect(mapStateToProps, { editName })(
  UpdateName
);


