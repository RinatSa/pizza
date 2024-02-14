import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type FetchProps = {
    sortLabel: string[],
    activeSort: number
}

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

interface ApiState {
    pizzas: Pizza[],
    loading: boolean,
    error: boolean
}

export const fetchPizza = createAsyncThunk<Pizza[], FetchProps>("api/fetchPizza",
    async function (params) {
        const {sortLabel, activeSort} = params
        const data = await fetch(`https://64560f792e41ccf16912d161.mockapi.io/items?sortBy=${sortLabel[activeSort]}`)
        return await data.json()
    }
)


const initialState: ApiState = {
    pizzas: [],
    loading: true,
    error: false
}

export const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizza.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPizza.fulfilled, (state, action: PayloadAction<Pizza[]>) => {
                state.loading = false
                state.pizzas = action.payload
            })
            .addCase(fetchPizza.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
})

export default apiSlice.reducer