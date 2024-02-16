import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartComponent from '../Cart/CartComponent'
import {emptyCart, handleUser} from '../../store/cartSlice'
import { HiOutlineEmojiSad } from "react-icons/hi";
import { FiDelete } from "react-icons/fi";
import ProductCart from '../product-in-cart/ProductCart'
import { IoBag } from "react-icons/io5";
import { cartShown, showModalHandler } from '../../store/ui-slice'

const CartComp = () => {
    const [notAuth, setNotAuth] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
 
    const productState = useSelector((state)=> state.products)
    const uiSlice = useSelector((state)=>state.ui)
 
    console.log('user',productState.userInfo, productState.item);
 
    const mode = Object.keys(productState?.userInfo).length == 0 ? "Register" : "Log In"


    const handleCheckout = ()=>{
        if(mode != 'Register'){
           setNotAuth(false)
          dispatch(cartShown())
          dispatch(emptyCart({
             items : [],
             totalPrice : 0,
             totalQty : 0
          }))
          dispatch(showModalHandler())
          setTimeout(() => {
            dispatch(showModalHandler())
          }, 1500);
        }else{
           setNotAuth(true)
           setTimeout(() => {
             dispatch(cartShown())
             navigate('/auth?mode=register')
             if(Object.keys(productState.userInfo)){
               setNotAuth(false)
             }
           }, 500);
        }
     }

  return (
    <CartComponent>
    <div className={`${uiSlice.isCartShown ? "active" : ""} cart-parent`}>
    <div className={` cart-comp col-lg-4 col-12 px-4 h-100`}>
        
    <div className='header'>
    <div className='back' onClick={()=> dispatch(cartShown())}>
    <FiDelete />
</div>
<div className='col-12 my-4 d-flex align-items-center justify-content-center'>
<IoBag className='fs-1 mx-2'/>
<span className='d-inline-block mx-2 fs-2'>Your Cart</span>
</div>
    <div className='col-12 my-3 fw-1 fs-5'>Total Quantity : {productState.totalQty}</div>
    <div className='col-12 my-3 fw-1 fs-5'>Total Price: ${productState.totalPrice}</div>
    </div>

   {productState.totalQty == 0 ?
     <div className='mt-4 col-12 empty-cart h-50 d-flex justify-content-center align-items-center'> 
          <div className='fs-1 fw-bold d-flex flex-column justify-content-center align-items-center w-100 gap-2'> 
          Empty Cart   
          <HiOutlineEmojiSad className='fs-1'/>
          </div>
     </div> : 
     <div className='cart-scroll'>
     <div className='mb-4 cart-body '>
     {productState.item.map((ele)=>{
       return <ProductCart ele={ele}/>
     })}
     
   </div>
     </div>

  }
  {productState.totalQty != 0 &&    <div className='cart-footer d-flex flex-column gap-3'>
  <button className='btn btn-success w-100 p-2' onClick={handleCheckout}>Checkout</button>
  {notAuth && <p className='invalid'>You are not Registered yet</p>} 
  </div>}

    </div>
    </div>
   
</CartComponent>
  )
}

export default CartComp
