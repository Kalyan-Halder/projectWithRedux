import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

import {createStore} from 'redux'
// import {rootReducer} from './reducer/rootReducer'
import {Provider} from 'react-redux'
import allReducer from './reducer/allReducer';

// const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
         <BrowserRouter>
           <App/>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
 