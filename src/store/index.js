import { configureStore } from "@reduxjs/toolkit";
import { userdata } from "./userSlice";


export const store = configureStore({
    reducer:{
        allusers : userdata
    }
})