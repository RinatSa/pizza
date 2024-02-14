import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FilterState {
    showPopup: boolean,
    activeSort: number,
    activeCategory: number,
    term: string
}

const initialState: FilterState = {
    showPopup: false,
    activeSort: 0,
    activeCategory: 0,
    term: ""
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setShowPopup(state, action: PayloadAction<boolean>) {
            state.showPopup = action.payload
        },
        setActiveSort(state, action: PayloadAction<number>) {
            state.activeSort = action.payload
        },
        setActiveCategory(state, action: PayloadAction<number>) {
            state.activeCategory = action.payload
        },
        setTerm(state, action: PayloadAction<string>) {
            state.term = action.payload
        }
    }
})

export const {setShowPopup, setActiveSort, setActiveCategory, setTerm} = filterSlice.actions
export default filterSlice.reducer