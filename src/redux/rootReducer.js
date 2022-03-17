// 3rd step
//this is to tagel multiple reducer

import reducer from './reducer'; 

import {combineReducers} from 'redux';

const rootReducer = combineReducers ({
    reducer //if i have more then one reducer then i need to just add all the reducer one by one here after importing
})

export default rootReducer ;