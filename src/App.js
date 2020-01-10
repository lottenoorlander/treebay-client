import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import TreeListContainer from "./components/TreeListContainer";
import TreeDetails from "./components/TreeDetails";
import Error from "./components/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to Treebay</header>
      <main>
        <Error />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/trees" component={TreeListContainer} />
        <Route path="/trees/:treeId" component={TreeDetails} />
      </main>
    </div>
  );
}

export default App;
