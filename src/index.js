import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import { ProductProvider } from "./product-service-context";
import customKitService from "./services/customKitService";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <ProductProvider value={new customKitService()}>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  </Provider>,
  document.querySelector("#root")
);
