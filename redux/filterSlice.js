import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    showPopup: false,
    activeSort: 0,
    activeCategory: 0,
    term: ""
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setShowPopup(state, action) {
            state.showPopup = action.payload
        },
        setActiveSort(state, action) {
            state.activeSort = action.payload
        },
        setActiveCategory(state, action) {
            state.activeCategory = action.payload
        },
        setTerm(state, action) {
            state.term = action.payload
        }
    }
})

export const {setShowPopup, setActiveSort, setActiveCategory, setTerm} = filterSlice.actions
export default filterSlice.reducer