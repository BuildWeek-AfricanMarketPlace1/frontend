import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editName } from "../store/actions/actions";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";


import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  font-family: "Roboto Slab", sans-serif;
`;

const StyledH1 = styled.h1`
  margin: 30px 0 10px 0;
`;

const StyledH2 = styled.h2`
  font-size: 1.4em;
  margin: 10px;
  font-weight: 400;
`;

const StyledLine = styled.p`
  font-size: 1.4em;
  margin: 10px;
`;

const TextAlign = styled.div`
  text-align: left;
  background: WHITESMOKE;
  border-radius: 2px;
  height: 200px;
  padding: 10px 60px;
  margin-right: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	&:hover {
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
  height: 500px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 1em;
`;

const InputField = styled.input`
  width: 200px;
  height: 50px;
  border: 1px solid #797979;
  margin: 8px 0;
  border-radius: 5px;
  background-color: white;
  font-family: "Roboto Slab", sans-serif;
  font-size: 1em;

  &:hover {
    border: 3px solid #36443b;
    background-color: white;
    box-shadow: 0 0 1vw #36443b;

    &:focus {
      border: 3px solid #36443b;
      background-color: white;
      box-shadow: 0 0 1vw #36443b;
    }
  }
`;

const FlexContainer = styled.div `
    display: flex;
    margin-top: 100px;
`

const StyledButton = styled.button`
  cursor: pointer;
  padding: 5px;
  background: #999;
  font-family: "Roboto Slab", sans-serif;
  font-size: 1em;
  border: none;
  outline: none;
  color: white;
  border-bottom: 2px solid #797979;
  margin-left: 20px;

  &:hover {
    background-color: #a1a1a1;
  }

  &:active {
    background-color: #888;
  }
`;

const initialItem = {
  location_id: 1,
  category_id: 1,
  name: "",
  description: "",
  price: 0.0,
};

const UpdateName = ({ editName }) => {
  const [updatedItem, setUpdatedItem] = useState(initialItem);
  const params = useParams();
  const history = useHistory();

  console.log("FUNCTION RUNNING", editName);

  console.log("ITEM ID", params);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/items/${params.id}`)
      .then((response) => {
        setUpdatedItem(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  const handleChanges = (event) => {
    event.persist();
    let value = event.target.value;
    setUpdatedItem({
      name: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editName(updatedItem, params.id);
    // history.push("/inventory");
  };

  console.log("ITEM", updatedItem);

  return (
    <StyledContainer>
      <StyledH1>Edit Name</StyledH1>
      <FlexContainer>
      <TextAlign>
      <StyledH2>Name: {updatedItem.name}</StyledH2>
      <StyledLine>Category: {updatedItem.catname}</StyledLine>
      <StyledH2>Description: {updatedItem.description}</StyledH2>
      <StyledLine>Price: {updatedItem.price}</StyledLine>
      </TextAlign>
      <FormContainer onSubmit={handleSubmit}>
        <InputField
          type="text"
          value={updatedItem.name}
          onChange={handleChanges}
          placeholder={updatedItem.name}
        />
        <StyledButton onClick={() => history.push("/inventory")}>Update</StyledButton>
      </FormContainer>
      </FlexContainer>
    </StyledContainer>
  );
};

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

export default connect(mapStateToProps, { editName })(UpdateName);
