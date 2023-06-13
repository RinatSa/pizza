import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchPizza = createAsyncThunk("api/fetchPizza",
    async function (params) {
        const {sortLabel, activeSort} = params
        const data = await fetch(`https://64560f792e41ccf16912d161.mockapi.io/items?sortBy=${sortLabel[activeSort]}`)
        return await data.json()
    }
)

const initialState = {
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
            .addCase(fetchPizza.fulfilled, (state, action) => {
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