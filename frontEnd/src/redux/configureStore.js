import {createStore, combineReducers,applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Categories } from './category';
import { InitialFeedback } from './form';
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
            ...createForms({
                feedback: InitialFeedback
            })
        
        }),  applyMiddleware(thunk, logger)
      
    );

    return store;
}