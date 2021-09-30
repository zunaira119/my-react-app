import * as ActionTypes from './ActionType';

export const FeatureProducts = (state  = { isLoading: true,
                                        errMess: null,
                                        featureProducts:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEATURED:
        return {...state, isLoading: false, errMess: null, featureProducts: action.payload};

        case ActionTypes.FEATURE_PRODUCTS_LOADING:
            return {...state, isLoading: true, errMess: null, featureProducts: []}

        case ActionTypes.FEATURE_PRODUCTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};