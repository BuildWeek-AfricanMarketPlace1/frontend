import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editItemDescription } from "../store/actions/actions";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialItem = {
  location_id: 1,
  category_id: 1,
  name: "",
  description: "",
  price: 0.0,
};

const EditDescription = ({ editItemDescription }) => {
  const [updatedItem, setUpdatedItem] = useState(initialItem);
  const params = useParams();

  // console.log("FUNCTION RUNNING", editItemDescription);

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
      description: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editItemDescription(updatedItem, params.id);
      // axiosWithAuth()
      // .put(`/api/items/${params.id}`, updatedItem)
      // .then((response) => {
      //   console.log("RESPONSE", response)
      //   setUpdatedItem(response.data.data)
      // })
      // .catch((error) => {
      //   console.log(error)
      // })
  
  };

console.log("UPDATED ITEM", updatedItem)

  return (
    <div>
      <h2>{updatedItem.name}</h2>
      <h3>{updatedItem.description}</h3>
      <p>Edit Description</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={updatedItem.description}
          onChange={handleChanges}
          placeholder={updatedItem.description}
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

export default connect(mapStateToProps, { editItemDescription })(EditDescription);
