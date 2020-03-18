import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider,applyMiddleware} from 'redux'
import {createStore} from 'redux'
import {thunk} from 'redux-thunk'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root')
);


