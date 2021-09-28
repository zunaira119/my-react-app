import {createStore, combineReducers,applyMiddleware} from 'redux';
import { Categories } from './category';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Products } from './product';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            categories : Categories,
            products:Products,
        }),  applyMiddleware(thunk, logger)
      
    );

    return store;
}