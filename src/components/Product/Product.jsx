import React from 'react'
import './style.scss'
import { useNavigate,useParams } from 'react-router-dom'

const Product = ({item, fromSearch}) => {
  const param = useParams()
  const navigate = useNavigate()

  
  return (
    <div className={`p-2 product ${fromSearch ? 'col-12 col-md-6 col-lg-4 m-3' : ''}`} onClick={()=>navigate(`/product/category/${item?.category}/${item.id}`)}>
        <img src={item.thumbnail} className="w-100 object-fit-cover " style={{height : '180px'}}/>
        <div className='product-details row my-2'>
            <div className='product-details__title col-6 d-flex justify-content-start'>{item.title.length > 10 ? item.title.slice(0,11) + '...' : item.title}</div>
            <div className='product-details__price col-6 d-flex justify-content-end'>${item.price}</div>
            <div className='product-details__title col-6 d-flex justify-content-start'>{item.brand.length > 12 ? item.brand.slice(0,12) + '...' : item.brand}</div>
            <div className='product-details__price col-6 d-flex justify-content-end'>{item.rating}</div>
        </div>
    </div>
  )
}

export default Product