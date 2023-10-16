import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCountries: {},
    addInvoice:{},
    allInvoice:{},
    deleteInvoice:{},
    singleInvoice:{},
    updateInvoice:{},
    loading: false,
};

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        
        addInvoice: (state) => {
            state.loading = true;
        },
        setAddInvoice: (state, action) => {
            state.loading = false;
            // state.allPost = action.payload;
        },
        allInvoice: (state) => {
            state.loading = true;
        },
        setAllInvoice: (state, action) => {
            state.loading = false;
            // state.allPost = action.payload;
        },
        deleteInvoice: (state) => {
            state.loading = true;
        },
        setDeleteInvoice: (state, action) => {
            state.loading = false;
            // state.allPost = action.payload;
        },
        singleInvoice: (state) => {
            state.loading = true;
        },
        setSingleInvoice: (state, action) => {
            state.loading = false;
            // state.allPost = action.payload;
        },
        updateInvoice: (state) => {
            state.loading = true;
        },
        setUpdateInvoice: (state, action) => {
            state.loading = false;
            // state.allPost = action.payload;
        },
        onErrorStopLoad: (state) => {
            state.loading = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    addInvoice,
    setAddInvoice,
    allInvoice,
    setAllInvoice,
    deleteInvoice,
    setDeleteInvoice,
    singleInvoice,
    setSingleInvoice,
    updateInvoice,
    setUpdateInvoice,


    allPostList,
    setAllPost,
    allCountries,
    setAllCountries,

    onErrorStopLoad,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
