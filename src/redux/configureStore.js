import {createStore, combineReducers,applyMiddleware} from 'redux';
import { Categories } from './category';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            categories : Categories,
        }),  applyMiddleware(thunk, logger)
      
    );

    return store;
}