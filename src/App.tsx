import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails/BookDetails";
import Layout from "./layouts/Layout";
import Toast from "./layouts/Toast";
import HomePage from "./pages/HomePage/HomePage";
import Wishlist from "./pages/Wishlist/Wishlist";
import { useAppDispatch, useAppSelector } from "./store/store";
import { hideToast } from "./store/toastSlice";
import { loadWishlist } from "./store/wishlistSlice";

function App() {
  // initial load for wishlist
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadWishlist());
  }, []);

  // toast open and close
  const toastState = useAppSelector((state) => state.toastSlice);

  useEffect(() => {
    if (toastState.show) {
      setTimeout(() => {
        dispatch(hideToast());
      }, 3000);
    }
  }, [toastState.show]);

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/books/:bookId" element={<BookDetails />} />
        </Routes>
      </Layout>
      <Toast toastState={toastState} />
    </div>
  );
}

export default App;
