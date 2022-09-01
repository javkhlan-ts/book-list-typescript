import { useLocation, useParams } from "react-router-dom";
import { Book } from "../../models/book.model";
import { useAppDispatch } from "../../store/store";
import { addWishlist } from "../../store/wishlistSlice";
import style from "./BookDetails.module.css";

const BookDetails = () => {
  // retrieve bookId and book from useParams and useLocation
  const bookId = useParams().bookId?.slice(1);
  const book = useLocation().state as Book;

  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(addWishlist(book));
  };

  return (
    <div className={style.bookdetails__container}>
      <div className={style.bookdetails__actionArea}>
        <div className={style.bookdetails__image}>
          <img src={book.imgUrl} alt={book.imgUrl} />
        </div>
        <div className={style.bookdetails__body}>
          <div className={style.bookdetails__title}>
            <strong>{book.title}</strong>
          </div>
          <div className={style.bookdetails__author}>
            <em>by {book.author}</em>
          </div>
        </div>
      </div>
      <div className={style.bookdetails__addBtnContainer}>
        <button className={style.bookdetails__addBtn} onClick={handleAdd}>
          + wishlist
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
