import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchAPI } from "../api/searchAPI";
import { Book } from "../models/book.model";
import { RootState } from "./store";

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
    async (searchText: string, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const currentPage = state.booklistSlice.currentPage;

        const res = await searchAPI(searchText, currentPage);
        
        const searchInput = searchText;
        const lastPage = Math.floor((res?.data?.totalItems || 1) / 20);
        const loading = false;
        
        const booklistRes = res?.data?.items || [];
        const booklist = booklistRes.map((book:any) => { 
            return {
                id: book.id,
                title: book?.volumeInfo?.title || "Title N/A",
                author: book?.volumeInfo?.authors?.join(", ") || "Author N/A",
                imgUrl: book?.volumeInfo?.imageLinks?.thumbnail || "Image N/A"
            };
        });

        return {booklist, searchInput, currentPage, lastPage, loading} as BooklistState;
    }
);

export const booklistSlice = createSlice({
    name: "booklistSlice",
    initialState,
    reducers: {
        prevPage: (state) => {
            state.currentPage--;
        },
        nextPage: (state) => {
            state.currentPage++;
        }
    },
    extraReducers: builder => {
        builder.addCase(searchBook.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(searchBook.fulfilled, (state, action: PayloadAction<BooklistState>) => {
            state.booklist = action.payload.booklist;
            state.searchInput = action.payload.searchInput;
            state.currentPage = action.payload.currentPage;
            state.lastPage = action.payload.lastPage;
            state.loading = action.payload.loading;
        })
    }
})

export default booklistSlice.reducer;
export const { prevPage, nextPage } = booklistSlice.actions;