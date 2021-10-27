import React from "react";
import Header from "./Components/Layout/Header/index";
// import { Sidebar } from './Components/Sidebar/Sidebar';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AppRoutes } from './Routes';
import {ProductList} from "./Components/ProductList"
import { Carasoul } from './Components/Carasoul/Carasoul';
import './App.css';
import { FooterContainer } from "./Components/Footer";
import  Layout from "./Components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contact from "./Pages/Contact";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import Cart from "./Pages/Cart";



const App: React.FC = () => {
  return (
  
      <Router>
          <div className="App"> 
          <Header />
        <Switch>
          <Route exact path="/" component={Layout} /> 
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/cart" component={Cart} />
        </Switch>
        <FooterContainer />
        </div>
      </Router>
     

  );
};

export default App;
