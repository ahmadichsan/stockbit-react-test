import { combineReducers } from 'redux';
import { configReducer } from '../config';

export const reduxReducer = combineReducers(configReducer);

export type AppState = ReturnType<typeof reduxReducer>;
