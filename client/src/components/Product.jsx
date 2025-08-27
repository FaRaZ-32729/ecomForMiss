import React from 'react';
import { NavLink } from 'react-router-dom';
const URL = import.meta.env.VITE_Node_Api_Url;

const Product = ({ item }) => {
  // console.log("product item", item);

  return (
    <div className='group relative'>
      <NavLink to={`/product/${item._id}`} onClick={() => window.scrollTo(0, 0)}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-96 lg:h-80">
          <img
            src={`${URL}${item.imageUrl}`}
            alt={item.name}
            className='h-full w-full object-cover object-center'
          />
        </div>
      </NavLink>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <NavLink to={`/product/${item._id}`}>
              <span aria-hidden="true" className='inset-0'>
                {item?.name}
              </span>
            </NavLink>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">
          ${item?.price}
        </p>
      </div>
    </div>
  );
};

export default Product;
