import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Product from '../components/Product';

const Women = () => {
  const { newCollections } = useContext(ShopContext);
  const menProducts = newCollections.filter((products) => products.category === "women");
  return (
    <div className='flex justify-center mt-24'>
      <div className='max-w-7xl max-auto '>
        <div>
          <img src="/assets/womenBanner.jpg" alt="" className="w-screen px-6 h-[650px]  " />
        </div>
        <div className="auto-max max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8 ">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start ">
            Men's Collection
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6  md:px-0  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {
              menProducts.map((item) => {
                return <Product key={item.id} item={item} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Women
