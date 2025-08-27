import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-gray-200 py-10' >
            <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between ">
                <div className="mb-6 md:mb-0 ">
                    <NavLink>
                        <img src="/assets/logo.png" alt="Logo" className='w-32' />
                    </NavLink>
                    <p className='text-sm mt-2' >High-Quality sustainable clothing at affordable price</p>
                    <p className='text-sm mt-2'>123 Fation St, Style City , NY 1001 </p>
                    <p className='text-sm '>Email : support@clothify.com</p>
                    <p className='text-sm '>Contact : (+92) 346-1034314 </p>
                </div>
                {/* Customer Service */}
                <div className="mb-6 md:mb-0 ">
                    <h3 className='text-xl font-semibold' > Customer Service </h3>
                    <ul className="mt-2 text-sm space-y-2">
                        <li>Contact Us</li>
                        <li>Shipping & Returns</li>
                        <li>FAQs</li>
                        <li>Order Tracking</li>
                        <li>Size Guide</li>
                    </ul>
                </div>
                {/* SocialMedia */}
                <div className="mb-6 md:mb-0">
                    <h3 className=" text-xl font-semibold">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitterSquare />
                        <FaPinterest />
                    </div>
                </div>
                {/* Subscriptions */}
                <div>
                    <h3 className=" text-xl font-semibold">Stay in the Loop</h3>
                    <p className="mt-2 text-sm "> Subscribe to get Special Offer, Free giveways and more</p>
                    <form action="" className='mt-4 flex' >
                        <input type="email" placeholder='Your Email' className='w-full p-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-50 ' />
                        <button type='submit' className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700' >Subscribe</button>
                    </form>
                </div>
            </div>
            {/* bottom */}
            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm ">
                <p> &copy; {new Date().getFullYear()} <span className='text-red-500' ></span>All rights reserved </p>
            </div>
        </footer>



    )
}

export default Footer
