import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import publicReducer from "./public/publicReducer";

const RootReducer = combineReducers({
    PublicStateReducers: publicReducer
})

export default configureStore({
    reducer: RootReducer
})