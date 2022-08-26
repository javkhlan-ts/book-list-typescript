import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={style.container}>
      <nav>
        <Link className={style.link} to="/">
          Home
        </Link>
        <Link className={style.link} to="/wishlist">
          Wishlist
        </Link>
      </nav>
    </header>
  );
};

export default Header;
