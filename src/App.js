import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to Treebay</header>
      <main>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </main>
    </div>
  );
}

export default App;
