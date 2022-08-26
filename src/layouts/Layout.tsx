import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import style from "./Layout.module.css";

interface Props {
  children: JSX.Element;
}

const Layout = (props: Props) => {
  return (
    <div className={style.main__container}>
      <Header />
      <main className={style.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
