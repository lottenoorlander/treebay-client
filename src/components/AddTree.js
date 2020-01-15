import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { addTree } from "../store/trees/actions";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

function AddTree(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const allTheTreeDetails = {
      type,
      price,
      img,
      location,
      description
    };
    dispatch(addTree(allTheTreeDetails, props.history));
    setType("");
    setPrice("");
    setImg("");
    setLocation("");
    setDescription("");
  };

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <h1>Add a Tree</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-type-input"
          name="type"
          label="Type of tree"
          onChange={e => setType(e.target.value)}
          value={type}
          variant="outlined"
        />{" "}
        <br />
        <TextField
          id="outlined-price-input"
          name="price in &#8364;"
          label="Price"
          onChange={e => setPrice(e.target.value)}
          value={price}
          variant="outlined"
          type="number"
        />{" "}
        <br />
        <TextField
          id="outlined-type-input"
          name="img"
          label="Image of the type of tree"
          onChange={e => setImg(e.target.value)}
          value={img}
          variant="outlined"
        />{" "}
        <br />
        <TextField
          id="outlined-type-input"
          name="location"
          label="Street and nr of the tree?"
          onChange={e => setLocation(e.target.value)}
          value={location}
          variant="outlined"
        />{" "}
        <br />
        <TextField
          id="outlined-multiline-flexible"
          name="description"
          label="Description of what you have for sale"
          multiline
          rowsMax="10"
          onChange={e => setDescription(e.target.value)}
          value={description}
          variant="outlined"
        />{" "}
        <br />
        <Button variant="contained" color="secondary" type="submit">
          Add your Tree
        </Button>
      </form>
    </div>
  );
}

export default withRouter(connect()(AddTree));
