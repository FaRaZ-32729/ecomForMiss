import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import ShowConfirmationToast from '../ShowConfirmationToast';

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-3004 '>
            <Link to='/' className='flex gap-1 items-baseline'>
                <img src="../public/assets/logo.png" alt="Logo" className='h-12 ' />
            </Link>

            <button onClick={() => user ? ShowConfirmationToast(setUser, navigate) : navigate("/login")} className="bg-blue-500 flex items-center  gap-2 text-white px-4 py-1 rounded-md ">
                {user ? user.name : "Login"}
                {
                    user && (
                        <img src="./public/assets/logout.svg" alt="" className='h-5 invert' />
                    )
                }
            </button>
        </div>
    )
}

export default Navbar
