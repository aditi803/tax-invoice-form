import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCountries: {},
    invoiceData:{},
    loading: false,
};

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        
        invoiceData: (state) => {
            state.loading = true;
        },
        setInvoiceData: (state, action) => {
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
    invoiceData,
    setInvoiceData,
    allPostList,
    setAllPost,
    allCountries,
    setAllCountries,
    onErrorStopLoad,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
