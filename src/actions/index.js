export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  hasErrored: bool
});

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool
});

export const loadingProducts = (products) => ({
  type: "LOADING_PRODUCTS",
  products
});

export const loadingUser = (user) => ({
  type: "LOADING_USER",
  user
});

export const loadingHistory = (history) => ({
  type: "LOADING_HISTORY",
  history
});

export const uploadPoint = (points) => ({
  type: "UPLOAD_POINTS",
  points
});

export const clearProducts = () => ({
  type: "CLEAR_PRODUCTS"
});

export const uploadRedeemProduct = (productId) => ({
  type: "REDEEM_PRODUCT",
  productId
});


const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ0NmUzZjc0MjM1MjAwMWVkOTA5N2EiLCJpYXQiOjE1OTgzMjAxOTF9.SvYm_3UWhP11QddDsVSJU7rVdMnAzNzl9fLO4dcPc4k"
}

export const getProducts = () => {
    return (dispatch) => {
      dispatch(clearProducts());
      dispatch(loadingError(false));
      dispatch(loadingInProgress(true));
  
      fetch("https://coding-challenge-api.aerolab.co/products", {headers})
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
  
          dispatch(loadingInProgress(false));
  
          return response;
        })
        .then((response) => response.json())
        .then((products) => dispatch(loadingProducts(products)))
        .catch(() => dispatch(loadingError(true)));
        
    };
  };
  
  export const getUser = () => {
    return (dispatch) => {
      dispatch(loadingError(false));
  
      fetch("https://coding-challenge-api.aerolab.co/user/me", {headers})
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }  
          return response;
        })
        .then((response) => response.json())
        .then((user) => dispatch(loadingUser(user)))
        .catch(() => dispatch(loadingError(true)));
        
    };
  };

  export const getHistory = () => {
    return (dispatch) => {
      dispatch(loadingError(false));
  
      fetch("https://coding-challenge-api.aerolab.co/user/history", {headers})
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }  
          return response;
        })
        .then((response) => response.json())
        .then((history) => dispatch(loadingHistory(history)))
        .catch(() => dispatch(loadingError(true)));
        
    };
  };

  export const addPoints = (points) => {
    return (dispatch) => {
      const data = { "new Points": 1000 };
      dispatch(loadingError(false));
  
      fetch("https://coding-challenge-api.aerolab.co/user/points", {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }  
          return response;
        })
        .then((response) => response.json())
        .then((points) => dispatch(uploadPoint(points)))
        .catch(() => dispatch(loadingError(true)));
        
    };
  };

  export const redeemProduct = (productId) => {
    return (dispatch) => {

      const data = { "productId": productId };

      dispatch(loadingError(false));

      fetch('https://coding-challenge-api.aerolab.co/redeem', {
        method: 'POST', 
        headers,
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }  
          return response;
        })
        .then((productId) => dispatch(uploadRedeemProduct(productId)))
        .catch(() => dispatch(loadingError(true)));
    };
  };


