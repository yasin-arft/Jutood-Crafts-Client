import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";
import Footer from "../pages/shared/footer/Footer";

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-3">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Root;