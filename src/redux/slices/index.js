import { combineReducers } from "@reduxjs/toolkit";
import { dashboardSlice } from "./dashboard";
import { invoiceSlice } from "./invoice";
import { authSlice } from "./auth";

export const mainReducer = combineReducers({
    // user: userSlice.reducer,
    auth: authSlice.reducer,
    dashboard: dashboardSlice.reducer,
    invoice: invoiceSlice.reducer,
})