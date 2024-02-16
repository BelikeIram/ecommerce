import React,{useEffect} from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import useForm from './useForm'
import {handleUser} from '../../store/cartSlice'
import {useDispatch} from 'react-redux'

const Register = ({registerHandle}) => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()


   const  {input: firstInput ,valid:firstValid, inputChange:firstChange} = useForm()
   const  {input: secondInput ,valid:secondValid, inputChange:secondChange} = useForm()
   const  {input: emailInput ,valid:emailValid, inputChange:emailChange} = useForm()
   const  {input: passInput ,valid:passValid, inputChange:passChange} = useForm()

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   let Passwordregex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;


  const submitForm = (e)=>{
      e.preventDefault()
    if(firstValid && secondValid && emailValid && passValid){
        localStorage.setItem('user', JSON.stringify({
            username : firstInput,
            password : passInput
        }))

        dispatch(handleUser({
            username : firstInput,
            password : passInput
         }))
        navigate('/')
    }
    
  }


  return (
   <>
   <form className='auth-body row gap-2' onSubmit={submitForm}>
        <div className='col-5 field'>
                 <label>First Name</label>
                 <input type='text' placeholder='firstname...'  value={firstInput} onChange={firstChange}/>
                 {!firstValid && <p className='invalid'>Invalid first name</p>} 
              </div>
              <div className='col-5 field'>
                 <label>Last Name</label> 
                 <input type='text' placeholder='lastname...' name='lastname' value={secondInput} onChange={secondChange}/>
                 {!secondValid && <p className='invalid'>Invalid first name</p>} 
              </div>
              <div className='col-12 field'>
                 <label>Email Address</label>
                 <input type='email' placeholder='email...'  name='email' value={emailInput} onChange={(e)=>emailChange(e, emailRegex)}/>
                 {!emailValid && <p className='invalid'>Invalid email</p>} 
              </div>
              <div className='col-12 field'>
                 <label>Password</label>
                 <input type='text' placeholder='password...' name='password' value={passInput} onChange={(e)=>passChange(e,Passwordregex)}/>
                 {!passValid && <p className='invalid'>Invalid password, it must alphanumeric</p>} 
              </div>
              <div className='col-12 field-btn'>
              <input type='submit' value={'Register'}/>
           </div>
    </form>       
   </>
  )
}

export default Register