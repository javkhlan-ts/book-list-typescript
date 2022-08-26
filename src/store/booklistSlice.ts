import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchAPI } from "../api/searchAPI";
import { Book } from "../models/book.model";

interface BooklistState {
    booklist: Book[],
    searchInput: string,
    currentPage: number,
    lastPage: number,
    loading: boolean,
}

const initialState: BooklistState = {
    booklist: [],
    searchInput: "",
    currentPage: 1,
    lastPage: 1,
    loading: false,
}

export const searchBook = createAsyncThunk(
    "booklistSlice/searchBook", 
    async (searchText: string) => {
        const res = await searchAPI(searchText, 1);
        return res;
    }
);

export const booklistSlice = createSlice({
    name: "booklistSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(searchBook.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(searchBook.fulfilled, (state, action: ActionType<unknown>) => {
            state.loading = false;
            state.searchInput = action.meta.arg;
            state.lastPage = Math.floor(action.payload.data.totalItems / 20);

            // type Book = { id: string, title: string, author: string, imgUrl: string}
            // want to take res and turn into booklist: Book[]
            const books = action.payload.data.items;
            console.log(books.map(book => book.id));
        })
    }
})

export default booklistSlice.reducer;
// export const { reducer1, reducer2 } = booklistSlice.actions;