import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import dishReducer from './reducers/dishReducer.js'
import userReducer from './reducers/userReducer'
import {combineReducers} from 'redux'
import loadingReducer from './reducers/loadingReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import orderReducer from './reducers/orderReducer'


const rootReducer = combineReducers({
    dishes: dishReducer,
    user: userReducer,
    loading: loadingReducer,
    order: orderReducer
  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root')
);


