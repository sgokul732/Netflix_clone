import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashBoard from "./containers/Dashboard";
import { Provider } from "react-redux";
import SerialDetails from "./containers/SerialDetails";
import store from "./store";
const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/serials/:id" component={SerialDetails} />
      </Router>
    </Provider>
  );
};

export default Routes;
