import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const URL = import.meta.env.VITE_Node_Api_Url;

const Cart = () => {
  const { newCollections, cartItems, removeFromCart, getTotalAmount, getTotalItems } = useContext(ShopContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mt-32'>
      <div className="max-w-7xl mx-auto my-10 p-4">
        {getTotalItems() === 0 ? (
          <div className="flex items-center justify-center">
            <img src="/assets/emptyCart3.png" alt="Empty Cart" />
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center px-4">
              <p>Product</p>
              <p>Title</p>
              <p className='hidden md:block'>Price</p>
              <p className='hidden md:block'>Quantity</p>
              <p className='hidden md:block'>Total</p>
              <p className='hidden md:block'>Remove</p>
            </div>
            <hr className='bg-gray-300 border-0 h-[2px] my-2' />

            {newCollections.map((product) => {
              if (cartItems[product._id] > 0) {
                return (
                  <div key={product._id}>
                    <div className="text-gray-500 font-semibold text-sm sm:text-base grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center px-4 gap-2">
                      <img src={`${URL}${product.imageUrl}`} alt={product.name} className='h-16 w-16 object-cover' />
                      <p>{product.name}</p>
                      <p className="hidden md:block ">${product.price}</p>
                      <button className='w-16 h-12 bg-white border border-gray-300'>{cartItems[product._id]}</button>
                      <p className="hidden md:block ">${product.price * cartItems[product._id]}</p>
                      <X onClick={() => removeFromCart(product._id)} className='cursor-pointer' />
                    </div>
                    <hr className='bg-gray-300 border-0 h-[2px] my-2' />
                  </div>
                );
              }
              return null;
            })}

            <div className="flex flex-col lg:flex-row my-12 gap-10 md:gap-32">
              <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-lg font-bold">Cart Total</h1>
                <div>
                  <div className="flex justify-between py-2">
                    <p>SubTotal:</p>
                    <p>${getTotalAmount()}</p>
                  </div>
                  <hr className='bg-gray-200 border-0 h-[2px] mt-2' />
                  <div className="flex justify-between py-3">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                  </div>
                  <hr className='bg-gray-200 border-0 h-[2px] mt-2' />
                  <div className="flex justify-between text-xl font-semibold py-2">
                    <h3>Total</h3>
                    <h3>${getTotalAmount()}</h3>
                  </div>
                </div>
                <NavLink to="/cart">
                  <button className='w-full lg:w-64 h-14 bg-red-500 text-white font-semibold text-lg'>
                    Proceed To Checkout
                  </button>
                </NavLink>
              </div>

              <div className="flex-1 w-full text-lg font-semibold">
                <p className="text-gray-500">Enter Your Promo Code</p>
                <div className="w-full lg:w-80 mt-2 flex">
                  <input type="text" placeholder='Promo code' className='flex-1 h-14 p-2 bg-gray-200' />
                  <button className='bg-black text-white h-14 w-32'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
