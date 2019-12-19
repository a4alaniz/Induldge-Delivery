import React from "react";
import { Switch, Route } from "react-router-dom";

import home from './containers/home'
import Checkout from './components/Checkout'

const Router = () => (
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
  );

export default Router;