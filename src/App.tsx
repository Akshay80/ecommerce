import React from "react";
import Header from "./Components/Layout/Header/index";
import "./App.css";
import { FooterContainer } from "./Components/Footer";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import CartContainer from "./Pages/CartContainer/cart.container";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
        </Switch>
        <FooterContainer />
      </div>
    </Router>
  );
};

export default App;
