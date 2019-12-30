import React, { Component } from 'react';
import Router from "./Router";
import './App.css';
import Navigation from './components/Navigation'
import { Container } from "semantic-ui-react";


class App extends Component {



  render() {
    return (
      <Container>
          <Navigation />
          <Router />
      </Container>
    );
  }
}

export default App;
