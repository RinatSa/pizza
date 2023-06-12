import {configureStore} from "@reduxjs/toolkit";
import filter from "../redux/filterSlice"
import pizzas from "../redux/pizzaSlice"


export const store = configureStore({
    reducer: {
        filter: filter,
        pizzas: pizzas
    }
})