import React from "react";
import { Route } from "react-router-dom";
import SignUpBuyer from "./components/SignUpBuyer";
import SignUpSeller from "./components/SignUpSeller";
import LoginSeller from "./components/LoginSeller";
import LoginBuyer from "./components/LoginBuyer";
import AccountPageSeller from "./components/AccountPageSeller";
import TreeListContainer from "./components/TreeListContainer";
import TreeDetails from "./components/TreeDetails";
import AddTree from "./components/AddTree";
import FinishSellerOnboarding from "./components/FinishSellerOnboarding";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AccountPageBuyer from "./components/AccountPageBuyer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Error />
        <Route path="/buyer/signup" component={SignUpBuyer} />
        <Route path="/seller/signup" component={SignUpSeller} />
        <Route path="/buyer/login" component={LoginBuyer} />
        <Route path="/seller/login" component={LoginSeller} />
        <Route exact path="/seller/account" component={AccountPageSeller} />
        <Route path="/buyer/account" component={AccountPageBuyer} />
        <Route exact path="/trees" component={TreeListContainer} />
        <Route exact path="/trees/:treeId" component={TreeDetails} />
        <Route path="/trees/add/tree" component={AddTree} />
        <Route
          path="/seller/account/finishedsignup"
          component={FinishSellerOnboarding}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
