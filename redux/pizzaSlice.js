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
            const actualPizza = state.pizzas.find(item => item.title === action.payload.title)
            if (actualPizza) {
                actualPizza.count++
            } else {
                state.pizzas.push(action.payload)
            }
            state.totalCount = state.pizzas.reduce((a, b) => a + b.count, 0)
            state.totalPrice = state.pizzas.reduce((a, b) => a + (b.price * b.count), 0)
        },
        clearAll(state) {
            state.pizzas = []
            state.totalCount = state.pizzas.reduce((a, b) => a + b.count, 0)
            state.totalPrice = state.pizzas.reduce((a, b) => a + (b.price * b.count), 0)
        },
        plus(state, action) {
            const actualPizza = state.pizzas.find(item => item.title === action.payload)
            actualPizza.count++
            state.totalCount = state.pizzas.reduce((a, b) => a + b.count, 0)
            state.totalPrice = state.pizzas.reduce((a, b) => a + (b.price * b.count), 0)
        },
        minus(state, action) {
            const actualPizza = state.pizzas.find(item => item.title === action.payload)
            if (actualPizza.count === 1) {
                state.pizzas = state.pizzas.filter(item => item.title !== action.payload)
                state.totalCount = state.pizzas.reduce((a, b) => a + b.count, 0)
                state.totalPrice = state.pizzas.reduce((a, b) => a + (b.price * b.count), 0)
            } else {
                actualPizza.count--
                state.totalCount = state.pizzas.reduce((a, b) => a + b.count, 0)
                state.totalPrice = state.pizzas.reduce((a, b) => a + (b.price * b.count), 0)
            }
        },
        clearLine(state, action) {
            state.pizzas = state.pizzas.filter(item => item.id !== action.payload)
            state.totalCount = state.pizzas.reduce((a, b) => a + b.count, 0)
            state.totalPrice = state.pizzas.reduce((a, b) => a + (b.price * b.count), 0)
        }
    }
})

export const {addPizzas, clearAll, plus, minus, clearLine} = pizzaSlice.actions
export default pizzaSlice.reducer