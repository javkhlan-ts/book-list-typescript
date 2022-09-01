import { useEffect } from "react";
import { nextPage, prevPage, searchBook } from "../../store/booklistSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import BookItem from "../BookItem/BookItem";
import style from "./BookList.module.css";

const BookList = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.booklistSlice.loading);
  const booklist = useAppSelector((state) => state.booklistSlice.booklist);
  const currentPage = useAppSelector(
    (state) => state.booklistSlice.currentPage
  );
  const lastPage = useAppSelector((state) => state.booklistSlice.lastPage);
  const searchInput = useAppSelector(
    (state) => state.booklistSlice.searchInput
  );

  const handlePrev = () => {
    dispatch(prevPage());
  };

  const handleNext = () => {
    dispatch(nextPage());
  };

  useEffect(() => {
    if (searchInput.length) {
      dispatch(searchBook(searchInput));
    }
  }, [currentPage]);

  return (
    <div className={style.booklist__container}>
      {loading && <p>Loading...</p>}
      {!loading &&
        booklist.map((book) => {
          return <BookItem key={book.id} book={book} />;
        })}
      {!loading && booklist.length > 0 && (
        <div className={style.pagination__container}>
          <button disabled={currentPage <= 1} onClick={handlePrev}>
            Prev
          </button>
          <div className="booklist__card-current-page">{currentPage}</div>
          <button disabled={currentPage >= lastPage} onClick={handleNext}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BookList;
