import React, { FormEvent, useRef } from "react";
import { useAppDispatch } from "../../store/store";
import { searchBook } from "../../store/booklistSlice";

import style from "./BookInput.module.css";

const BookInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      dispatch(searchBook(inputRef.current.value));
    }
  };

  return (
    <form className={style.form__container} onSubmit={submitHandler}>
      <div>
        <label htmlFor="book-search-text">Book Search</label>
        <div>
          <input type="text" id="book-search-text" ref={inputRef} />
          <button type="submit">SEARCH</button>
        </div>
      </div>
    </form>
  );
};

export default BookInput;
