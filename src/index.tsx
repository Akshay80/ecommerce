import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index.";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </QueryClientProvider>,
  document.getElementById("root")
);
