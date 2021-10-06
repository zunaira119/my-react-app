import * as ActionTypes from './ActionType';
import { baseUrl } from '../shared/baseUrl';
// CATEGORIES//
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

// PRODUCTS//

export const fetchProducts = () => (dispatch) => {
  dispatch(productsLoading());

  return fetch(baseUrl + 'products')
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
  .then(products => dispatch(addProducts(products)))
  .catch(error => dispatch(productsFailed(error.message)));
}

export const productsLoading = () => ({
  type: ActionTypes.PRODUCTS_LOADING
});

export const productsFailed = (errmess) =>({
  type:ActionTypes.PRODUCTS_FAILED,
  payload:errmess
});

export const addProducts = (products) =>({
  type:ActionTypes.ADD_PRODUCTS,
  payload:products
});
// featured products
export const fetchfeaturedProducts = () => (dispatch) => {
  dispatch(featureProductsLoading());

  return fetch(baseUrl + 'products/featured')
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
  .then(featured => dispatch(addFeatured(featured)))
  .catch(error => dispatch(featureProductsFailed(error.message)));
}

export const addFeatured = (featured) =>({
  type:ActionTypes.ADD_FEATURED,
  payload:featured
});
export const featureProductsLoading = () => ({
  type: ActionTypes.FEATURE_PRODUCTS_LOADING
});

export const featureProductsFailed = (errmess) =>({
  type:ActionTypes.FEATURE_PRODUCTS_FAILED,
  payload:errmess
});

export const postFeedback = (feedback) => (dispatch) => {
  // newComment.date = new Date().toISOString();
  console.log(JSON.stringify(feedback));
  return fetch(baseUrl + 'contactUs', {
    mode:'cors',
      method: "POST",
      body: JSON.stringify(feedback),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "same-origin"
  })
  .then(response => {
    console.log(response);
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addFeedback(response)))
  .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};

export const addFeedback = (feedback) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: feedback
});