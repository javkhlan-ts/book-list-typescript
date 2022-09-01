import { useAppDispatch, useAppSelector } from "../../store/store";
import { deleteWishlist } from "../../store/wishlistSlice";
import style from "./Wishlist.module.css";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlistSlice.wishlist);

  return (
    <div className={style.wishlist__container}>
      <ul className={style.wishlist__list}>
        {wishlist.map((book) => {
          return (
            <li className={style.wishlist__item} key={book.id}>
              <span>{book.title}</span>
              <button onClick={() => dispatch(deleteWishlist(book.id))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Wishlist;
