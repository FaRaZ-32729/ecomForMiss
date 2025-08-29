import React, { useContext, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import ShowConfirmationToast from '../ShowConfirmationToast'

const Menu = ({ showMenu, setShowMenu }) => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [openProducts, setOpenProducts] = useState(false);

    const handleClick = () => setShowMenu(false);

    return (
        <div
            className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 h-screen flex w-[75%] flex-col justify-between text-black bg-white pt-16 md:hidden rounded-r-xl  px-8 pb-6 shadow-md transition-all duration-300`}
        >
            <div>
                {/* User Info */}
                <div className="flex items-center justify-start gap-3 ">
                    <FaUserCircle size={50} />
                    <div>
                        <h1>Hello {user ? user.name.toUpperCase() : "User"}</h1>
                        <h1 className="text-sm text-slate-500">{user?.email}</h1>
                    </div>
                </div>

                {/* Nav Links */}
                <nav className="mt-12">
                    <ul className="flex flex-col space-y-4 text-lg font-semibold">

                        <NavLink to="/" onClick={handleClick}><li>Home</li></NavLink>

                        {/* Products collapsible */}
                        <li
                            className="cursor-pointer"
                            onClick={() => setOpenProducts(!openProducts)}
                        >
                            <div className="flex justify-between items-center">
                                <span>Products ▾</span>
                            </div>
                            {openProducts && (
                                <ul className="ml-4 mt-2 flex flex-col space-y-2 text-base font-normal">
                                    <NavLink to="/men" onClick={handleClick}><li>Men</li></NavLink>
                                    <NavLink to="/women" onClick={handleClick}><li>Women</li></NavLink>
                                    <NavLink to="/kids" onClick={handleClick}><li>Kids</li></NavLink>
                                </ul>
                            )}
                        </li>

                        <NavLink to="/about" onClick={handleClick}><li>About Us</li></NavLink>
                        <NavLink to="/contact" onClick={handleClick}><li>Contact Us</li></NavLink>
                        <NavLink to="/gallrey" onClick={handleClick}><li>Gallrey</li></NavLink>

                        {/* Login/Logout */}
                        <button
                            onClick={() =>
                                user ? ShowConfirmationToast(setUser, navigate) : navigate("/login")
                            }
                            className="bg-red-500 flex items-center w-[110px] gap-2 text-white px-4 py-1 rounded-md"
                        >
                            {user ? user.name : "Login"}
                            {user && (
                                <img
                                    src="./public/assets/logout.svg"
                                    alt="logout"
                                    className="h-5 w-5 invert"
                                />
                            )}
                        </button>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menu;
