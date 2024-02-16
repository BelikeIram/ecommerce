import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    item : [],
    totalQty : 0,
    totalPrice : 0,
    changed : false,
    userInfo : {}
}

export const productSlice = createSlice({
    name : "products",
    initialState,
    reducers : {
        replaceCart(state,action){
            state.item = action.payload.items,
            state.totalQty = action.payload.totalQty
            state.totalPrice = action.payload.totalPrice
         },
        addProduct(state,action){
        
            let prevState = [...state.item];
            const existingIndex = state.item.findIndex((item) => item.id === action.payload.id);
            const existingPro = state.item.find((item) => item.id === action.payload.id);
          
            if (existingPro) {
              // Update the existing product in the array
              prevState[existingIndex].qty += action.payload.qty;
            } else {
              // Add the new product to the array
              prevState = [...state.item, action.payload];
            }
          
            state.item = prevState;
            state.totalQty += action.payload.qty;
            state.totalPrice +=  action.payload.qty * action.payload.price
            state.changed = true
        },
        removeItem(state,action){
            const filteredData = state.item.filter((item)=>item.id !== action.payload.id)

            state.item = filteredData
            state.totalQty = Math.abs(state.totalQty - action.payload.qty)
            state.totalPrice = Math.abs(state.totalPrice - (action.payload.qty * action.payload.price))
            state.changed = false
        },
        emptyCart(state,action){
            state.item = action.payload.items
            state.totalPrice = action.payload.totalPrice
            state.totalQty = action.payload.totalQty
            state.changed = false
        },
        handleUser(state,action){
            state.userInfo.username = action.payload.username
            state.userInfo.password = action.payload.password
            
        }
    }
})

export const {replaceCart, addProduct, removeItem, emptyCart, userInfo, handleUser} = productSlice.actions;
