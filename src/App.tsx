import React from 'react';
import Layout from './Components/Layout/index';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AppRoutes } from './Routes';
import {ProductList} from "./Components/ProductList"
import './App.css';

const App:React.FC = ()  => {
  return (
    <div className="App">
      <AppRoutes />
      <h1>Ecommerce app</h1>
      <ProductList />
      
    </div>
  );
}

 export default App;