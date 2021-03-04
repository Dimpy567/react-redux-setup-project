import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/index';
import App from './App';
import './../assets/styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore();

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById( 'root' )
);
