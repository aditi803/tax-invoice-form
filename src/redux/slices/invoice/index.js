import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPost: {},
    allCountries: {},
    loading: false,
};

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        allPostList: (state) => {
            state.loading = true;
        },
        setAllPost: (state, action) => {
            state.loading = false;
            state.allPost = action.payload;
        },
        allCountries: (state) => {
            state.loading = true;
        },
        setAllCountries: (state, action) => {
            state.loading = false;
            state.allPost = action.payload;
        },
        onErrorStopLoad: (state) => {
            state.loading = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    allPostList,
    setAllPost,
    allCountries,
    setAllCountries,
    onErrorStopLoad,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
