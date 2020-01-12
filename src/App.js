import React from "react";
import { Route, Link } from "react-router-dom";
import ToolBar from "./components/ToolBar";
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
import "./App.css";
import CheckoutFormContainer from "./components/CheckoutFormContainer";

function App() {
  return (
    <div className="App">
      <header>Welcome to Treebay</header>
      <div>
        <Link to="/seller/login">Start selling</Link>
        <Link to="/buyer/login">Start buying</Link>
      </div>
      <ToolBar />
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
        <Route path="/payments" component={CheckoutFormContainer} />
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
