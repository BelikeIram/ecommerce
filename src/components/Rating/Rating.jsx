import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import './style.scss'

const Rating = ({rate}) => {
    // const ratee = rate.floor
    const decimal = rate.toString().split(".")[1] 
  return (
    <span className='rating'>
    {Array.from({length : Math.floor(rate)}, (v,i)=> <FaStar/>)}
    {decimal && <FaStarHalf />}
    </span>
  )
}

export default Rating