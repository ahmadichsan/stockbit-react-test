import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import { reduxReducer } from './App.reducers';
import { configPersist } from '../config';

const finalReducers = persistReducer(configPersist, reduxReducer);

const middlewares = process.env.NODE_ENV === 'development' ? [logger] : [];

const store = createStore(finalReducers, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { persistor, store };
