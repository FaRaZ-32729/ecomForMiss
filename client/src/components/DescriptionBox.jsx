import React from 'react';

const DescriptionBox = ({ product }) => {
  if (!product) {
    return (
      <div className='px-6 md:px-0'>
        <div className="flex">
          <div className="border border-gray-400 font-semibold p-4">Description</div>
          <div className="border border-gray-400 font-semibold p-4">Reviews (0)</div>
        </div>
        <div className="border border-gray-400 p-8">
          <p>No description available for this product.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='px-6 md:px-0'>
      <div className="flex">
        <div className="border border-gray-400 font-semibold p-4">Description</div>
        <div className="border border-gray-400 font-semibold p-4">Reviews ({product.reviews})</div>
      </div>
      <div className="border border-gray-400 p-8">
        <p className="whitespace-pre-line">
          {product.detail || "No description available for this product."}
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
