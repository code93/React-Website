import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers'

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { firebase } from './firebase';

import Routes from './routes';

import './firebase';

const App = (props) => {
    return(
        <BrowserRouter>
            <Routes {...props}/>
        </BrowserRouter>
    )

}

const createStoreWithMiddleware = applyMiddleware()(createStore)

firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App user={user}/>
    </Provider>
    , document.getElementById('root'));
})
