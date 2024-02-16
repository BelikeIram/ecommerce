import {configureStore} from "@reduxjs/toolkit";
import { productSlice } from "./cartSlice";
import { uiSlice } from "./ui-slice";



export const store = configureStore({
    reducer : {
       products : productSlice.reducer,
       ui : uiSlice.reducer
    }
})

