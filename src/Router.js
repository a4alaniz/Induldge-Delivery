import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import RegisterPage from './components/RegisterPage';
import Login from './components/Login';
import home from './containers/home'
import Checkout from './components/Checkout'
import Orders from './components/Orders'

class Router extends Component {



  
    render () {
    return (
        <div>
    <Switch>
    <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={home} />
      <Route exact path="/checkout" component={Checkout} />
      <Route path="/orders" component={Orders} />
    </Switch>
    {/* {this.props.currentUser.username
        ? <button onClick={this.handleClick}>Log Out</button>
        : null
      } */}
      </div>
  );
    }
}

export default Router