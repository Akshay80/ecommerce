import React from 'react';
import Layout from './Components/Layout/index';
import { Sidebar } from './Components/Sidebar/Sidebar';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AppRoutes } from './Routes';
import {ProductList} from "./Components/ProductList"
import './App.css';
import  { FooterContainer }  from './Components/Footer'

const App:React.FC = ()  => {
  return (
    <div>
      <AppRoutes />
      <div className="row">
      <div className="col-3">
      <Sidebar />  
        </div>
        <div className="col-9">
        <ProductList />
        </div>
      
      </div>
      
      {/* <h1>Ecommerce app</h1> */}
      
     <FooterContainer /> 
    </div>
  );
}

 export default App;