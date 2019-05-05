import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import createSagaMiddleware from 'redux-saga'

import { rootReducer } from "../reducers/index";
import rootSaga from '../sagas';

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancer = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  pReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

export default store;
