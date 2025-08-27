import React, { useContext } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import ShowConfirmationToast from '../ShowConfirmationToast'

const Menu = ({ showMenu, setShowMenu }) => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleClick = () => {
        setShowMenu(false);
    }
    return (
        <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 h-screen flex w-[75%] flex-col justify-between text-black bg-white pt-16 md:hidden rounded-r-xl  px-8 pb-6  shadow-md`} >
            <div>
                <div className="flex items-center justify-start gap-3 ">
                    <FaUserCircle size={50} />
                    <div>
                        <h1>Hello {user ? user.name.toUpperCase() : "User"}</h1>
                        <h1 className='text-sm text-slate-500' >{user.email}</h1>
                    </div>
                </div>
                <nav className="mt-12">
                    <ul className="flex flex-col space-y-4 text-xl  ">
                        <NavLink to="/" onClick={handleClick} ><li>Home</li></NavLink>
                        <NavLink to="/men" onClick={handleClick} ><li>Men</li></NavLink>
                        <NavLink to="/women" onClick={handleClick} ><li>Women</li></NavLink>
                        <NavLink to="/kids" onClick={handleClick} ><li>Kids</li></NavLink>
                        {/* <NavLink to="/login" ><button className="bg-red-500 text-white px-4 py-1 rounded-md ">Login</button></NavLink> */}
                        <button onClick={() => user ? ShowConfirmationToast(setUser, navigate) : navigate("/login")} className="bg-red-500 flex items-center w-[100px] gap-2 text-white  px-4 py-1 rounded-md ">
                            {user ? user.name : "login"}
                            {
                                user && (
                                    <img src="./public/assets/logout.svg" alt="" className='h-5 w-5 invert' />
                                )
                            }
                        </button>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu
