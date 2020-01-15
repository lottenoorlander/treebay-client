import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { signUp } from "../store/auth/actions";
import "./SignUp.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

function SignUpPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const accountDetailsBuyer = {
      username,
      password
    };
    dispatch(signUp(accountDetailsBuyer, "buyer", props.history));
    setUsername("");
    setPassword("");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="SignUpForm">
      <h1>Start saving the planet </h1>
      <br />
      <form
        className={classes.root}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-search"
          name="username"
          label="Username"
          onChange={e => setUsername(e.target.value)}
          value={username}
          variant="outlined"
          autoComplete="username"
        />{" "}
        <br />
        <TextField
          id="outlined-password-input"
          name="password"
          label="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          variant="outlined"
          autoComplete="current-password"
          minlength="4"
        />{" "}
        <br />
        <Button variant="contained" color="secondary" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default withRouter(connect()(SignUpPage));
