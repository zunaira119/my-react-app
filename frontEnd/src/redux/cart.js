import * as ActionTypes from './ActionType';

export const cartItems = (state = {
        isLoading: true,
        errMess: null,
        cartItems: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_CART:
            return {...state, isLoading: false, errMess: null, cartItems: action.payload};

        case ActionTypes.CART_LOADING:
            return {...state, isLoading: true, errMess: null, cartItems: null};

        case ActionTypes.CART_FAILED:
            return {...state, isLoading: false, errMess: action.payload, cartItems: null};

        default:
            return state;
    }
}