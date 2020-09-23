import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { addItem } from "../store/actions/Actions";
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

  useEffect(() => {
    addItem();
  }, [addItem]);

  const handleChanges = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h2>Add a new Product</h2>
      <form>
        <label>
          Product name:
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleChanges}
          />
        </label>
        <label>
          Export Location:
          <input
            type="text"
            name="location"
            value={newItem.locname}
            onChange={handleChanges}
          />
        </label>
        <label>
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
        <label>
          <input
            type="number"
            step=".01"
            value={newItem.price}
            name="price"
            placeholder="0.00"
            onChange={handleChanges}
          />
        </label>
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
