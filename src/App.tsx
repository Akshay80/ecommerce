import React from 'react';
import Layout from './Components/Layout/index';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AppRoutes } from './Routes';

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

 export default App;