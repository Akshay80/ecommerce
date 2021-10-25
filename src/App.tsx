import React from 'react';
import Layout from './Components/Layout/index';
import { Sidebar } from './Components/Sidebar/Sidebar';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AppRoutes } from './Routes';
import { ProductList } from "./Components/ProductList"
import { Carasoul } from './Components/Carasoul/Carasoul';
import './App.css';

const App:React.FC = ()  => {
  return (
    <div>
      <AppRoutes />
      
      <div className="row">
      <div className="col-3" style={{border:"1px solid lightgray"}}>
      <Sidebar />  
        </div>
        <div className="col-9">
          <Carasoul />
        <ProductList />
        </div>
      </div>
      
      
      {/* <h1>Ecommerce app</h1> */}
      
      
    </div>
  );
}

 export default App;