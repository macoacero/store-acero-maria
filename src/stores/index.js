import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

const logger = store => next => action => {
  let result
  result = next(action)
  return result
}

const storeFactory = () =>
  createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
  )

export default storeFactory