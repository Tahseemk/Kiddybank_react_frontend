import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inventory: null,
    invoiceId: "",
    quotation: null,
    customerId: "",
    notificationId: "",
    serviceId: ""
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        saveInventory: (state, action) => {
            state.inventory = action.payload;
        },
    },
});

export const { saveInventory, saveInvoiceId, saveQuotation, saveCustomerId, saveNotificationId, saveServiceId } =
    appSlice.actions;

export default appSlice.reducer;
