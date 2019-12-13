import React from 'react';
import { Route } from 'react-router-dom'
import home from './containers/home'
import './App.css';

function App() {
  return (
    <div className="App">
       <Route exact path="/" component={home} />
    </div>
  );
}

export default App;
