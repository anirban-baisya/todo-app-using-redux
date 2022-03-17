// 4th step
//after performing reducer now i have to store the data in store.js

import { createStore } from 'redux';

import rootReducer from './rootReducer'; 

// const store = createStore(rootReducer);
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store ;




// https://github.com/zalmoxisus/redux-devtools-extension#installation 
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() this for react dev tool extension
///**** now i have to pass the store inside Provider as props ; so that it will declear as global data & any one can access that;   in side of the index.js file */