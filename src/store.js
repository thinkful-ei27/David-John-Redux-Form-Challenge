import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';

export default createStore(
    combineReducers({
        form: formReducer
    }, 
    composeWithDevTools(
        applyMiddleware(thunk)
    ))
)