import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editName } from "../store/actions/actions";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialItem = {
  location_id: 1,
  category_id: 1,
  name: "",
  description: "",
  price: 0.0,
};

const UpdateName = ({editName}) => {
  const [updatedItem, setUpdatedItem] = useState(initialItem);
  const params = useParams();

  console.log("FUNCTION RUNNING", editName);

  console.log("ITEM ID", params)
 

  useEffect(() => {
    axiosWithAuth()
    .get(`/api/items/${params.id}`)
      .then((response) => {
        setUpdatedItem(response.data.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);


  const handleChanges = (event) => {
    event.persist();
    let value = event.target.value;
    setUpdatedItem({
      ...updatedItem,
      description: value,
    });
  };

  const handleSubmit = (event) => {
    editName(updatedItem.name, params.id);
  };


  console.log("ITEM", updatedItem);

  return (
    <div>
      <h2>Updated name:{updatedItem.name}</h2>
      <p>Category: {updatedItem.catname}</p>
      <h3>Description: {updatedItem.description}</h3>
      <p>Price: {updatedItem.price}</p>
      <p>Edit Name</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={updatedItem.name}
          onChange={handleChanges}
          placeholder={updatedItem.name}
        />
        <button>Update</button>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

export default connect(mapStateToProps, { editName })(UpdateName);
