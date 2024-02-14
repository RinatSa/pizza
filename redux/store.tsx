import {configureStore} from "@reduxjs/toolkit";
import filter from "./filterSlice"
import pizzas from "./pizzaSlice"
import api from "./apiSlice"


export const store = configureStore({
    reducer: {
        filter: filter,
        pizzas: pizzas,
        api: api
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
