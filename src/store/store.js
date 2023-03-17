import { configureStore } from "@reduxjs/toolkit";
import rootReducer from  './reducers/rootReducer';
import thunk from 'redux-thunk';

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

//Persist config
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//

const initialState = {};
const middleware = [thunk];

export const store = configureStore({
    reducer: persistedReducer, //reducer: rootReducer,
    preloadedState: initialState,
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
}
);

export const persistor = persistStore(store);//export default store;