import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Book } from "../models/book.model";
import { RootState } from "./store";
import { addToast } from "./toastSlice";

interface WishlistState {
    wishlist: Book[],
}

const initialState: WishlistState = {
    wishlist: []
}

export const loadWishlist = createAsyncThunk(
    "wishlistSlice/loadWishlist",
    async () => {
        const loadedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        return loadedWishlist;
    }
)

export const addWishlist = createAsyncThunk(
    "wishlistSlice/addWishlist",
    async (book: Book, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const currentWishlist = state.wishlistSlice.wishlist;
        
        if(currentWishlist.find(wishlistItem => wishlistItem.id === book.id)){
            const toastText = "Book is already in wishlist!";
            thunkAPI.dispatch(addToast({text: toastText, status: "warning", show: true}));
            return thunkAPI.rejectWithValue("duplicate!");
        }

        const newWishlist = [...currentWishlist, book];
        localStorage.setItem("wishlist", JSON.stringify(newWishlist));
        thunkAPI.dispatch(addToast({text: "Book successfully added to wishlist!", status: "success", show: true}));
        return newWishlist;
    }
)

export const deleteWishlist = createAsyncThunk(
    "wishlistSlice/deleteWishlist",
    async (id: string, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const currentWishlist = state.wishlistSlice.wishlist;
        const newWishlist = currentWishlist.filter(book => book.id !== id);
        localStorage.setItem("wishlist", JSON.stringify(newWishlist));
        return newWishlist;
    }
)

export const wishlistSlice = createSlice({
    name: "wishlistSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addWishlist.fulfilled, (state, action) => {
            state.wishlist = action.payload;
        });
        builder.addCase(addWishlist.rejected, (state, action) => {
            // nothing needs to be done here!
        });
        builder.addCase(loadWishlist.fulfilled, (state, action) => {
            state.wishlist = action.payload;
        });
        builder.addCase(deleteWishlist.fulfilled, (state, action) => {
            state.wishlist = action.payload;
        })
    }
});

export default wishlistSlice.reducer;
// export const { reducer1, reducer2 } = wishlistSlice.actions;