import React from 'react'
import './style.scss'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../store/cartSlice'
import toast from 'react-hot-toast'

const ProductCart = ({ele}) => {
  const dispatch = useDispatch()

  const removeHandler = ()=>{
    dispatch(removeItem(ele))
    toast.error("Removed from cart",{
      duration : 1000
    })
  }

  return (
    <div className='d-flex align-items-center gap-2'> 
    <div className='prd-cart col-10 d-flex justify-content-between align-items-center my-2'>
        <div className='col-6 d-flex flex-column gap-3'>
            <div className='prd-cart_ele fs-5 fw-2'>{ele.title}</div>
            <div className='prd-cart_ele fs-5 fw-2'>{ele.brand}</div>
        </div>
        <div className='col-6 d-flex flex-column gap-3 justify-content-end'>
           <div className='d-flex justify-content-end '>${ele.price}</div>
           <div className='d-flex justify-content-end'>{ele.qty}</div>
       </div>
    </div>
    <div onClick={removeHandler}>
     <i className="fa-regular fa-circle-xmark fs-3"></i>
    </div>
    </div>
  )
}

export default ProductCart