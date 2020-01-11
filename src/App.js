import React from "react";
import { Route, Link } from "react-router-dom";
import SignUpBuyer from "./components/SignUpBuyer";
import SignUpSeller from "./components/SignUpSeller";
import LoginSeller from "./components/LoginSeller";
import LoginBuyer from "./components/LoginBuyer";
import AccountPageSeller from "./components/AccountPageSeller";
import TreeListContainer from "./components/TreeListContainer";
import TreeDetails from "./components/TreeDetails";
import AddTree from "./components/AddTree";
import Error from "./components/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>Welcome to Treebay</header>
      <Link to="/seller/login">Start selling</Link>
      <Link to="/buyer/login">Start buying</Link>
      <main>
        <Error />
        <Route path="/buyer/signup" component={SignUpBuyer} />
        <Route path="/seller/signup" component={SignUpSeller} />
        <Route path="/buyer/login" component={LoginBuyer} />
        <Route path="/seller/login" component={LoginSeller} />
        <Route path="/seller/account" component={AccountPageSeller} />
        <Route exact path="/trees" component={TreeListContainer} />
        <Route exact path="/trees/:treeId" component={TreeDetails} />
        <Route path="/trees/add/tree" component={AddTree} />
      </main>
    </div>
  );
}

export default App;
