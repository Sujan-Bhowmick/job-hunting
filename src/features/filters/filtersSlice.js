import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sort: "",
    filter: "",
    search: ""
} 

const filtersSlice = createSlice({
    name: "filters",
    initialState, 
    reducers: {
        // update filter, sort , search
        updateFilters: (state, action) => {
            state = {...state, ...action.payload};
            return state;
        },
    },
});

export const {updateFilters} = filtersSlice.actions;
export default filtersSlice.reducer;