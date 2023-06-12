import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    pizzas: [],
    totalCount: 0,
    totalPrice: 0
}

export const pizzaSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {
        addPizzas(state, action) {
            state.pizzas.push(action.payload)
            state.totalCount = state.pizzas.reduce((a, b) => a + b.count, 0)
            state.totalPrice = state.pizzas.reduce((a, b) => a + b.price, 0)

        }
    }
})

export const {addPizzas} = pizzaSlice.actions
export default pizzaSlice.reducer