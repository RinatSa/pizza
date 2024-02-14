import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Pizza = {
    id: number,
    price: number,
    title: string,
    imageUrl: string,
    count: number,
    category: number,
    sizes: number,
    types: number[]
}

interface PizzaState {
    pizzas: Pizza[],
    totalCount: number,
    totalPrice: number
}

const initialState: PizzaState = {
    pizzas: [],
    totalCount: 0,
    totalPrice: 0
}

export const pizzaSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {
        addPizzas(state, action: PayloadAction<Pizza>) {
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
        plus(state, action: PayloadAction<string>) {
            const actualPizza = state.pizzas.find(item => item.title === action.payload)
            if (actualPizza) {
                actualPizza.count++
                state.totalCount = state.pizzas.reduce((a, b) => a + b.count, 0)
                state.totalPrice = state.pizzas.reduce((a, b) => a + (b.price * b.count), 0)
            }
        },
        minus(state, action: PayloadAction<string>) {
            const actualPizza = state.pizzas.find(item => item.title === action.payload)
            if (actualPizza) {
                if (actualPizza.count === 1) {
                    state.pizzas = state.pizzas.filter(item => item.title !== action.payload)
                    state.totalCount = state.pizzas.reduce((a, b) => a + b.count, 0)
                    state.totalPrice = state.pizzas.reduce((a, b) => a + (b.price * b.count), 0)
                } else {
                    actualPizza.count--
                    state.totalCount = state.pizzas.reduce((a, b) => a + b.count, 0)
                    state.totalPrice = state.pizzas.reduce((a, b) => a + (b.price * b.count), 0)
                }
            }
        },
        clearLine(state, action: PayloadAction<number>) {
            state.pizzas = state.pizzas.filter(item => item.id !== action.payload)
            state.totalCount = state.pizzas.reduce((a, b) => a + b.count, 0)
            state.totalPrice = state.pizzas.reduce((a, b) => a + (b.price * b.count), 0)
        }
    }
})

export const {addPizzas, clearAll, plus, minus, clearLine} = pizzaSlice.actions
export default pizzaSlice.reducer