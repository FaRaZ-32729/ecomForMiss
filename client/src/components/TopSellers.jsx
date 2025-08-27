import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Product from './Product';

const TopSellers = () => {
    const { newCollections } = useContext(ShopContext);

    // Safe fallback if newCollections is undefined/null
    const topProducts = Array.isArray(newCollections)
        ? [...newCollections].sort((a, b) => b.reviews - a.reviews).slice(0, 8)
        : [];

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center font-serif">
                Top Sellers
            </h2>
            <p className="text-center mt-3 md:px-53">
                Discover our most popular picks loved by our customers. High-rated products with great reviews and demand.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {topProducts.length > 0 ? (
                    topProducts.map((item) => (
                        <Product key={item._id} item={item} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-400">No top sellers found</p>
                )}
            </div>
        </div>
    );
};

export default TopSellers;
