import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';
import {reducer as optionReducer} from './reducers/index';

export default createStore(
    combineReducers({
        form: formReducer,
        options: optionReducer
    }, 
    composeWithDevTools(
        applyMiddleware(thunk)
    ))
)