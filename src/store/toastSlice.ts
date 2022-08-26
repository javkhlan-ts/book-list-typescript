import { createSlice } from "@reduxjs/toolkit";

interface ToastState {
    text: string,
    status: "success" | "warning" | "error" | null
}

const initialState: ToastState = {
    text: "", 
    status: null
}

export const toastSlice = createSlice({
    name: "toastSlice",
    initialState,
    reducers: {},
    extraReducers: {}
});

export default toastSlice.reducer;
// export const { reducer1, reducer2 } = toastSlice.actions;