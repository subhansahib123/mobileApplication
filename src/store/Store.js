import {configureStore} from "@reduxjs/toolkit";


import colorReducer from "./features/colors/ColorSlice";


export const store = configureStore({
    reducer : colorReducer
})