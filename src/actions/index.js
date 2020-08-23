export const loadingError = (bool) => ({
    type: "LOADING_ERROR",
    hasErrored: bool
  });
  
  export const loadingInProgress = (bool) => ({
    type: "LOADING_IN_PROGRESS",
    isLoading: bool
  });
  
  export const loadingSuccess = (products) => ({
    type: "LOADING_SUCCESS",
    products
  });
  
  export const clearRepos = () => ({
    type: "CLEAR_REPOS"
  });


const headers = {
    "Content-Type": "application/json",
    Autorization: "BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
}

export const getRepos = () => {
    return (dispatch) => {
      dispatch(clearRepos());
  
      dispatch(loadingError(false));
  
      dispatch(loadingInProgress(true));
  
      fetch(`https://coding-challenge-api.aerolab.co/products`, headers)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
  
          dispatch(loadingInProgress(false));
  
          return response;
        })
        .then((response) => response.json())
        .then((products) => dispatch(loadingSuccess(products)))
        .catch(() => dispatch(loadingError(true)));
    };
  };
  