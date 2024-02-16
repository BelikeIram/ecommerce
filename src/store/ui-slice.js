

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isCartShown : false,
    showNotification : false,
    showModal : false
}

export const uiSlice = createSlice({
    name : "products",
    initialState,
    reducers : {
       
        cartShown(state,action){
            state.isCartShown = !state.isCartShown
        },
        showNotificationHandler(state){
            state.showNotification = !state.showNotification
        },
        showModalHandler(state){
           state.showModal = !state.showModal
        }

    }
})

export const {cartShown, showNotificationHandler, showModalHandler} = uiSlice.actions