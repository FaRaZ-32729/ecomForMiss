import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const SideBarLinks = [
        { name: "Dashboard", path: "/admin", icon: "../public/assets/dashboard.svg" },
        { name: "Add-Product", path: "/admin/add-product", icon: "../public/assets/add.svg" },
        { name: "All-Products", path: "/admin/all-products", icon: "../public/assets/list.svg" },
    ]

    return (
        <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300 '>
            {SideBarLinks.map((item, index) => (
                <NavLink to={item.path} key={index} end="/admin" className={({ isActive }) => `flex items-center px-4 py-3 gap-3 md:px-8 ${isActive ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600 " : "hover:bg-gray-100/90 border-white text-gray-700"}`}>
                    <img src={item.icon} alt={item.name} className='h-6 ' />
                    <p className='md:block hidden text-center '>{item.name}</p>
                </NavLink>
            ))}

        </div>
    )
}

export default Sidebar
