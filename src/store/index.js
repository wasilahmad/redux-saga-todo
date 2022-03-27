import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// middleware dependencies
const middlewares = [sagaMiddleware];

// create central store and mount middlewares
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

const store = process.env.NODE_ENV === "production"
                    ? createStore(rootReducer, applyMiddleware(...middlewares))
                    : createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;

// run the saga before render the application
sagaMiddleware.run(rootSaga);