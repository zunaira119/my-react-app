import * as ActionTypes from './ActionType';
import { baseUrl } from '../shared/baseUrl';

export const fetchCategories = () => (dispatch) => {
    dispatch(categoriesLoading());

    return fetch(baseUrl + 'categories')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(categories => dispatch(addCategories(categories)))
    .catch(error => dispatch(categoriesFailed(error.message)));
}

export const categoriesLoading = () => ({
    type: ActionTypes.CATEGORIES_LOADING
});

export const categoriesFailed = (errmess) =>({
    type:ActionTypes.CATEGORIES_FAILED,
    payload:errmess
});

export const addCategories = (categories) =>({
    type:ActionTypes.ADD_CATEGORIES,
    payload:categories
});
