import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { homeReducer } from './reducers/homeReducer'

const singleReducer = combineReducers({
    homeReducer,
})

// Create an epmty store object
const store = createStore(
    singleReducer,
    applyMiddleware(logger)
)

console.log(store.getState())

export default store