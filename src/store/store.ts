import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import wishlistReducer from "./wishlistSlice";
import booklistReducer from "./booklistSlice";

export const store = configureStore({
    reducer: {
        wishlistSlice: wishlistReducer,
        booklistSlice: booklistReducer
    },
    // Error: react_devtools_backend.js:4026 A non-serializable value was detected in an action
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// custom types: removed export
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;


// custom hooks for useDispatch, useSelector
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;