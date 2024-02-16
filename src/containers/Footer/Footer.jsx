import React from 'react'
import './style.scss'
import { Original, Return } from '../../assets'

const Footer = () => {
  return (
    <div className='container-fluid footer'>
       <div className='footer-body row justify-content-between'>
          <div className='col-md-4 d-flex left-body'>
             <strong>ShopHop</strong>
             <small>Copyright © 2024</small>
          </div>
          <div className='col-md-6 d-flex justify-content-start flex-column right-body'>
             <div className='col-12 m-2 d-flex gap-3 justify-content-start original'>
                 <div className='col-4 original-img'>
                    <img src={Original} alt='orignal'/>
                 </div>
                 <div className='col-6 d-flex flex-column original-text' >
                     <strong className='w-100'>100% Original Brands</strong>
                     <small>guarantee for all products at shophop.com</small>
                 </div>
             </div>
             <div className='col-12 m-2 d-flex gap-3 justify-content-start align-items-center original '>
             <div className='col-4 original-img'>
                <img src={Return} alt='orignal' className="w-75"/>
             </div>
             <div className='col-6 d-flex flex-column original-text' >
                 <strong className='w-100'>100% Original Brands</strong>
                 <small>guarantee for all products at shophop.com</small>
             </div>
         </div>
          </div>
       </div>
    </div>
  )
}

export default Footer