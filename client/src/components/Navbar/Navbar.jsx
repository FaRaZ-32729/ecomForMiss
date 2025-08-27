import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import Menu from './Menu'
import UserContext from '../../context/UserContext'
import ShowConfirmationToast from '../ShowConfirmationToast'

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setShowMenu(!showMenu);

  return (
    <div className='bg-white px-4 fixed w-full z-50 shadow-sm top-0 shadow-gray-400'>
      <div className="max-w-7xl mx-auto py-2 px-5 flex justify-between items-center ">

        {/* Logo */}
        <NavLink to="/" >
          <img src="/assets/logo.png" alt="logo" className='md:w-24 w-20' />
        </NavLink>

        <div className="flex items-center gap-5">

          {/* Nav links */}
          <nav className="hidden md:block">
            <ul className="flex items-center font-semibold text-lg gap-7 relative">

              <NavLink to="/"><li>Home</li></NavLink>

              {/* Dropdown for Products */}
              <li
                className="relative cursor-pointer"
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}
              >
                <span>Products ▾</span>
                {openDropdown && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-40 text-base">
                    <NavLink to="/men">
                      <li className="px-4 py-2 hover:bg-gray-100">Men</li>
                    </NavLink>
                    <NavLink to="/women">
                      <li className="px-4 py-2 hover:bg-gray-100">Women</li>
                    </NavLink>
                    <NavLink to="/kids">
                      <li className="px-4 py-2 hover:bg-gray-100">Kids</li>
                    </NavLink>
                  </ul>
                )}
              </li>

              <NavLink to="/about"><li>About Us</li></NavLink>
              <NavLink to="/contact"><li>Contact Us</li></NavLink>
              <NavLink to="/feedback"><li>Feedback</li></NavLink>

              {/* Login/Logout */}
              <button
                onClick={() =>
                  user ? ShowConfirmationToast(setUser, navigate) : navigate("/login")
                }
                className="bg-red-500 flex items-center gap-2 text-white px-4 py-1 rounded-md"
              >
                {user ? user.name : "Login"}
                {user && (
                  <img
                    src="./public/assets/logout.svg"
                    alt=""
                    className="h-5 invert"
                  />
                )}
              </button>
            </ul>
          </nav>

          {/* Cart Icon */}
          <NavLink to="/cart" className="relative w-10">
            <ShoppingCart />
            <div className="bg-red-500 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white text-xs">0</div>
          </NavLink>

          {/* Mobile Menu Toggle */}
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggle}
              className="cursor-pointer transition-all md:hidden"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggle}
              className="cursor-pointer transition-all md:hidden"
              size={30}
            />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
