import {createStore, combineReducers,applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Categories } from './category';
import { InitialFeedback , RegisterForm } from './form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Products } from './product';
import { Auth } from './auth';
import { FeatureProducts } from './featureProduct';
import { favorites } from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            categories : Categories,
            products:Products,
            featureProducts:FeatureProducts,
            auth: Auth,
            favorites,
            ...createForms({
                feedback: InitialFeedback,
                userData : RegisterForm
            })
        
        }),  applyMiddleware(thunk, logger)
      
    );

    return store;
}