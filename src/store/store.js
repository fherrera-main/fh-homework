import { configureStore } from "@reduxjs/toolkit";
import rootReducer from  './reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
}
);

export default store;