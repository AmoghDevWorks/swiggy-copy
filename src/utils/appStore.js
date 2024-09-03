import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

// console.log(cartReducer)

const appStore = configureStore({
    reducer:{
        cart:cartReducer,
    }
});

// console.log("appstore",appStore)

export default appStore;