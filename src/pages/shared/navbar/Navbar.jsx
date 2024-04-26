import { useNavigate } from "react-router-dom";
import OurNavLink from "./OurNavLink";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const navItemsData = [
    { path: '/', text: 'Home' },
    { path: '/all_art_craft', text: 'All Art & craft' }
  ]

  // private routes
  currentUser && navItemsData.push(
    { path: '/add_craft', text: 'Add Craft' },
    { path: '/my_art_craft', text: 'My Art & Craft' },
  )

  const navLinks = <>
    {
      navItemsData.map((item, idx) => <OurNavLink key={idx} item={item} />)
    }
  </>

  return (
    <nav className="container mx-auto px-3">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="nav-ul flex-col menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-pacifico text-transparent bg-gradient-to-r from-primary from-50% to-secondary bg-clip-text">Jutood Crafts</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="nav-ul menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
            currentUser ?
              <div className="flex gap-2 items-center">
                <span>
                  {
                    currentUser.photoURL
                  }
                </span>
                <button className="border btn bg-primary hover:bg-secondary text-white duration-300">Logout</button>
              </div> :
              <div className="flex gap-2 items-center">
                <button onClick={() => navigate('/login')} className="border btn bg-primary hover:bg-secondary text-white duration-300">Login</button>
                <button onClick={() => navigate('/register')} className="border btn bg-primary hover:bg-secondary text-white duration-300">Register</button>
              </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;