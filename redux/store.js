import {configureStore} from "@reduxjs/toolkit";
import filter from "../redux/filterSlice"

export const store = configureStore({
    reducer: {
        filter: filter
    }
})