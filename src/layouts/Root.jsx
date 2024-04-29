import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";
import Footer from "../pages/shared/footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../components/Loader";

const Root = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loader/>
  }
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-3">
        <ToastContainer />
        <Outlet />
      </main>
      <footer className="bg-secondary">
        <Footer />
      </footer>
    </>
  );
};

export default Root;