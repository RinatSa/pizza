import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    showPopup: false,
    activeSort: 0
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
        }
    }
})

export const {setShowPopup, setActiveSort} = filterSlice.actions
export default filterSlice.reducer