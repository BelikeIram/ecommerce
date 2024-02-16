import React from 'react'
import './style.scss'

const ProductSkeleton = () => {
  return (
    <div className='p-2 product product-skeleton'>
    <div  className="w-100 product-skeleton-img" style={{height : '180px'}}></div>
    <div className='product-details row my-2'>
        <div className='skeleton-text product-details__title col-6 d-flex justify-content-start'></div>
        <div className='skeleton-text product-details__price col-6 d-flex justify-content-end'></div>
        <div className='skeleton-text product-details__title col-6 d-flex justify-content-start'></div>
        <div className='skeleton-text product-details__price col-6 d-flex justify-content-end'></div>
    </div>
</div>
  )
}

export default ProductSkeleton