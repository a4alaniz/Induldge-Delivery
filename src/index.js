import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
// import "semantic-ui-css/semantic.min.css";
import restaurantReducer from './Store/reducers/restaurant'
import testReducer from './Store/reducers/restaurant'
import 'bootstrap/dist/css/bootstrap.min.css';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    restaurantState: restaurantReducer,
    test: testReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

// const store = createStore(reducer)

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
