import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from './Breadcrum';
import ProductDisplay from './ProductDisplay';
import DescriptionBox from './DescriptionBox';

const DetailPage = () => {
  const { newCollections } = useContext(ShopContext);
  const { productId } = useParams();

  const product = newCollections.find((e) => e._id === productId);
  // console.log(product)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='max-w-7xl mx-auto mb-32 mt-32'>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox product={product} />
    </div>
  )
}

export default DetailPage
