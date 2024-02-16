import React from 'react'

const Signin = () => {
  return (
    <div>
              <div className='col-12 field'>
                 <label>Email Address</label>
                 <input type='text' placeholder='email...'/>
              </div>
              <div className='col-12 field'>
                 <label>Contact number</label>
                 <input type='text' placeholder='phone number...'/>
              </div> 
    </div>
  )
}

export default Signin