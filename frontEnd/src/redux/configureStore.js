import {createStore, combineReducers,applyMiddleware} from 'redux';
import { Categories } from './category';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Products } from './product';
import { FeatureProducts } from './featureProduct';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            categories : Categories,
            products:Products,
            featureProducts:FeatureProducts,
        
        }),  applyMiddleware(thunk, logger)
      
    );

    return store;
}