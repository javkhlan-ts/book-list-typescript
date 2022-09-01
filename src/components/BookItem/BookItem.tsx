import React from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../../models/book.model";
import { useAppDispatch } from "../../store/store";
import { addWishlist } from "../../store/wishlistSlice";
import style from "./BookItem.module.css";

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBookDetails = () => {
    navigate(`./books/:${props.book.id}`, { state: props.book });
  };

  const handleAdd = () => {
    dispatch(addWishlist(props.book));
  };

  return (
    <div className={style.bookitem__container}>
      <div className={style.bookitem__card}>
        <div className={style.card__actionArea} onClick={handleBookDetails}>
          <div className={style.card__image}>
            <img src={props.book.imgUrl} alt={props.book.imgUrl} />
          </div>
          <div className={style.card__body}>
            <div className="card__author">
              <strong>{props.book.title}</strong>
            </div>
            <div className="card__author">
              <em>by {props.book.author}</em>
            </div>
          </div>
        </div>
        <div className={style.card__btnContainer}>
          <button className={style.card__addBtn} onClick={handleAdd}>
            + wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
