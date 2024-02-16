import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='nt-fnd'>
       <div className='row col-md-6 col-8'>
           <p className='col-12 fs-1 err-msg'>
               The Product you are looking for is out of stock or use another keyword
           </p>
           <div className='field col-12 my-2 d-flex justify-content-center'>
               <Link className='w-75 p-2 field-btn' to={'/'}>Go Back</Link>
           </div>
       </div>
    </div>
  )
}

export default NotFound