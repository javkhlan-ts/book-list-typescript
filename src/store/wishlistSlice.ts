import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../models/book.model";

interface WishlistState {
    wishlist: Book[],
}

const initialState: WishlistState = {
    wishlist: []
}

export const wishlistSlice = createSlice({
    name: "wishlistSlice",
    initialState,
    reducers: {},
    extraReducers: {}
});

export default wishlistSlice.reducer;
// export const { reducer1, reducer2 } = wishlistSlice.actions;