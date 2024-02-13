import {configureStore} from "@reduxjs/toolkit";
import filter from "../redux/filterSlice"
import pizzas from "../redux/pizzaSlice"
import api from "../redux/apiSlice"


export const store = configureStore({
    reducer: {
        filter: filter,
        pizzas: pizzas,
        api: api
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
