import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';


// middleware dependencies
const middlewares = [];

// create central store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
