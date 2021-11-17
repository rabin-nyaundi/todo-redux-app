import { createStore,combineReducers, applyMiddleware } from "redux";
import {persistReducer} from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { todos } from "../redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
    todos
}

const persistConfig ={
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2 
}

const rootReducer = combineReducers(reducers)

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => createStore(
    persistedReducer,
    applyMiddleware(thunk, composeWithDevTools)
);
                                                                                                                                                                                                                                                                                                                                                                                                                            