import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Wishlist from "./pages/Wishlist/Wishlist";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
