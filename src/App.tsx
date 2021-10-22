import React from 'react';
import {ProductList} from "./Components/ProductList"
import './App.css';

const App:React.FC = ()  => {
  return (
    <div className="App">
      <h1>Ecommerce app</h1>
      <ProductList />
      
    </div>
  );
}

 export default App;