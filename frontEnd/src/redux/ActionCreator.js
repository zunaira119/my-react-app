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

// export const fetchSingleProduct = () => (dispatch) => {
//   dispatch(productsLoading());

//   return fetch(baseUrl + 'products/:productId')
//   .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         var error = new Error('Error ' + response.status + ': ' + response.statusText);
//         error.response = response;
//         throw error;
//       }
//     },
//     error => {
//           var errmess = new Error(error.message);
//           throw errmess;
//     })
//   .then(response => response.json())
//   .then(product => dispatch(addSingleProduct(product)))
//   .catch(error => dispatch(productsFailed(error.message)));
// }

// export const addSingleProduct = (product) =>({
//   type:ActionTypes.PRODUCT_DETAIL,
//   payload:product
// });