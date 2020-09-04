import { combineReducers } from 'redux'

const loadingError = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_ERROR':
      return action.hasErrored;
    default:
      return state;
  }
}

const loadingInProgress = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_IN_PROGRESS':
      return action.isLoading;
    default:
      return state;
  }
}

const loadingProducts = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_PRODUCTS':
      return action.products
    case 'CLEAR_PRODUCTS':
      return []
    default:
      return state
  }
}

const loadingUser = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_USER':
      return action.user
    default:
      return state
  }
}

const loadingHistory = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_HISTORY':
      return action.history
    default:
      return state
  }
}

const uploadRedeemProduct = (state = [], action) => {
  switch (action.type) {
    case 'REDEEM_PRODUCT':
      return action.productId
    default:
      return state
  }
}

const errorRedeem= (state = false, action) => {
  switch (action.type) {
    case 'ERROR_REDEEM':
      return action.errorRed
    default:
      return state  }
}

export default combineReducers({
  loadingUser,
  loadingProducts,
  loadingError,
  loadingInProgress,
  loadingHistory,
  uploadRedeemProduct,
  errorRedeem
})
