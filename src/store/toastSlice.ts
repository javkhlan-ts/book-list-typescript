import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToastState {
    text: string,
    status: "success" | "warning" | "error" | null,
    show: boolean
}

const initialState: ToastState = {
    text: "", 
    status: null,
    show: false
}

export const toastSlice = createSlice({
    name: "toastSlice",
    initialState,
    reducers: {
        addToast: (state, action: PayloadAction<ToastState>) => {
            state.text = action.payload.text;
            state.status = action.payload.status;
            state.show = action.payload.show;
        },
        hideToast: (state) => {
            state.show = false;
        }
    },
    extraReducers: {}
});

export default toastSlice.reducer;
export const { addToast, hideToast } = toastSlice.actions;