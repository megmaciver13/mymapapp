import { combineReducers } from 'redux'
import map from './map'

const myApp = combineReducers({map})

// combineReducers turns an object whose values are different reducing functions
// into a single reducing function you can pass to createStore.

export default myApp