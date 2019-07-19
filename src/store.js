import {createStore, applyMiddleware} from "redux"

import {composeWithDevTools} from 'redux-devtools-extension';
//Sagas Middleware
import createSagaMiddleware from 'redux-saga';
//Mis Sagas
import sagas from './sagas'
//Reducers
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
    realtime: true,
});


export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(sagas);