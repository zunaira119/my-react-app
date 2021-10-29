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

// post feed back
export const postFeedback = (feedback) => (dispatch) => {
  // newComment.date = new Date().toISOString();
  console.log(JSON.stringify(feedback));
  return fetch(baseUrl + 'contactUs', {
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

// login user 

export const requestLogin = (creds) => {
  return {
      type: ActionTypes.LOGIN_REQUEST,
      creds
  }
}

export const receiveLogin = (response) => {
  return {
      type: ActionTypes.LOGIN_SUCCESS,
      token: response.token
  }
}

export const loginError = (message) => {
  return {
      type: ActionTypes.LOGIN_FAILURE,
      message
  }
}

export const loginUser = (creds) => (dispatch) => {
  // We dispatch requestLogin to kickoff the call to the API
  dispatch(requestLogin(creds))
  console.log(creds);

  return fetch(baseUrl + 'users/login', {
      method: 'POST',
      headers: { 
          'Content-Type':'application/json' 
      },
      body: JSON.stringify(creds)
  })
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
          throw error;
      })
  .then(response => response.json())
  .then(response => {
      if (response.success) {
        console.log(response);
          // If login was successful, set the token in local storage
          localStorage.setItem('token', response.token);
          // localStorage.setItem('creds', JSON.stringify(creds));
          localStorage.setItem('creds', JSON.stringify(response));
          // Dispatch the success action
          dispatch(receiveLogin(response));
      }
      else {
          var error = new Error('Error ' + response.status);
          error.response = response;
          throw error;
      }
  })
  .catch(error => dispatch(loginError(error.message)))
};

export const registerUser = (values) => (dispatch) => {
  // newComment.date = new Date().toISOString();
  console.log(JSON.stringify(values));
  return fetch(baseUrl + 'users/signup', {
      method: "POST",
      body: JSON.stringify(values),
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
  .then(response => dispatch(addUserData(response)))
  .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};

export const addUserData = (user) => ({
  type: ActionTypes.ADD_USER_DATA,
  payload: user
});


// logout user

export const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST
  }
}

export const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS
  }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout())
  localStorage.removeItem('token');
  localStorage.removeItem('creds');
  dispatch(receiveLogout())
}


// favourites

export const postFavorite = (productId) => (dispatch) => {

  const bearer = 'Bearer ' + localStorage.getItem('token');

  return fetch(baseUrl + 'favorites', {
      method: "POST",
      body: JSON.stringify({"_id": productId}),
      headers: {
        "Content-Type": "application/json",
        'Authorization': bearer
      },
      credentials: "same-origin"
  })
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
          throw error;
    })
  .then(response => response.json())
  .then(favorites => { console.log('Favorite Added', favorites); dispatch(addFavorites(favorites)); })
  .catch(error => dispatch(favoritesFailed(error.message)));
}

export const deleteFavorite = (productId) => (dispatch) => {

  const bearer = 'Bearer ' + localStorage.getItem('token');

  return fetch(baseUrl + 'favorites/' + productId, {
      method: "DELETE",
      headers: {
        'Authorization': bearer
      },
      credentials: "same-origin"
  })
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
          throw error;
    })
  .then(response => response.json())
  .then(favorites => { console.log('Favorite Deleted', favorites); dispatch(addFavorites(favorites)); })
  .catch(error => dispatch(favoritesFailed(error.message)));
};

export const fetchFavorites = () => (dispatch) => {
  dispatch(favoritesLoading(true));

  const bearer = 'Bearer ' + localStorage.getItem('token');

  return fetch(baseUrl + 'favorites', {
      headers: {
          'Authorization': bearer
      },
  })
  .then(response => {
    console.log(response);
      if (response.ok) {
          return response;
      }
      else {
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
  .then(favorites => dispatch(addFavorites(favorites)))
  .catch(error => dispatch(favoritesFailed(error.message)));
}

export const favoritesLoading = () => ({
  type: ActionTypes.FAVORITES_LOADING
});

export const favoritesFailed = (errmess) => ({
  type: ActionTypes.FAVORITES_FAILED,
  payload: errmess
});

export const addFavorites = (favorites) => ({
  type: ActionTypes.ADD_FAVORITES,
  payload: favorites
});

export const postCart = (productId) => (dispatch) => {

  const bearer = 'Bearer ' + localStorage.getItem('token');

  return fetch(baseUrl + 'cart', {
      method: "POST",
      body: JSON.stringify({"_id": productId}),
      headers: {
        "Content-Type": "application/json",
        'Authorization': bearer
      },
      credentials: "same-origin"
  })
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
          throw error;
    })
  .then(response => response.json())
  .then(cartItems => { console.log('Favorite Added', cartItems); dispatch(addFavorites(cartItems)); })
  .catch(error => dispatch(favoritesFailed(error.message)));
}

// export const deleteFavorite = (productId) => (dispatch) => {

//   const bearer = 'Bearer ' + localStorage.getItem('token');

//   return fetch(baseUrl + 'favorites/' + productId, {
//       method: "DELETE",
//       headers: {
//         'Authorization': bearer
//       },
//       credentials: "same-origin"
//   })
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
//           throw error;
//     })
//   .then(response => response.json())
//   .then(favorites => { console.log('Favorite Deleted', favorites); dispatch(addFavorites(favorites)); })
//   .catch(error => dispatch(favoritesFailed(error.message)));
// };

export const fetchCartItems = () => (dispatch) => {
  dispatch(cartLoading(true));

  const bearer = 'Bearer ' + localStorage.getItem('token');

  return fetch(baseUrl + 'cart', {
      headers: {
          'Authorization': bearer
      },
  })
  .then(response => {
    console.log(response);
      if (response.ok) {
          return response;
      }
      else {
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
  .then(cartItems => dispatch(addToCart(cartItems)))
  .catch(error => dispatch(cartFailed(error.message)));
}

export const cartLoading = () => ({
  type: ActionTypes.CART_LOADING
});

export const cartFailed = (errmess) => ({
  type: ActionTypes.CART_FAILED,
  payload: errmess
});

export const addToCart = (cartItems) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: cartItems
});

