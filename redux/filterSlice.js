import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    showPopup: false
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setShowPopup(state, action) {
            state.showPopup = action.payload
        }
    }
})

export const {setShowPopup} = filterSlice.actions
export default filterSlice.reducer