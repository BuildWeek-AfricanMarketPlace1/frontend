import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { addItem } from "../store/actions/actions";
import { connect } from "react-redux";

const initialFormValues = {
  name: "",
  locname: "",
  catname: "",
  description: "",
  price: 0.0,
};

function AddProduct({ inventory, addItem }) {
  const [newItem, setNewItem] = useState(initialFormValues);
  const history = useHistory();

  const handleSubmit = (event) => {
    addItem(newItem);
  };

  const handleChanges = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h2>Add a new Product</h2>
      <form onSubmit={handleSubmit}>
        <br></br>
        <label>
          Product name:
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <label>
          Export Location:
          <input
            type="text"
            name="location"
            value={newItem.locname}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <label>
          Category:
          <select
            onChange={handleChanges}
            value={newItem.catname}
            name="category"
          >
            <option value="">Select a Product Category</option>
            <option value="Animal Products">Animal Products</option>
            <option value="Beans">Beans</option>
            <option value="Cereals">Cereals</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
          </select>
        </label>
        <Link exact to="/add-category">
          <span>
            <button>Add Category</button>
          </span>
        </Link>
        <br></br>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newItem.description}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <label>
          Price:
          <input
            type="number"
            step=".01"
            value={newItem.price}
            name="price"
            placeholder="0.00"
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <button>Submit</button>
      </form>
      {/* {products.map(product => (
                <Link key={product.id} to={``}
            )) */}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    inventory: state.inventory,
  };
}

export default connect(mapStateToProps, { addItem })(AddProduct);
