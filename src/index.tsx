import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import  store from './store/index.'
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//     </Provider>,
const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
     <Provider store={store}>
    <App />
    </Provider>,
  </QueryClientProvider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App /> 
//     </Provider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
