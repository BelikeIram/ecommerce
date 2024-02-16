import React,{useEffect} from 'react'
import './style.scss'
import HeroComp from '../../../components/Hero/HeroComp'



const Hero = () => {

   const scrollHandle = ()=>{
      window.scrollTo({
         top : 800,
         behavior : 'smooth'
      })
   }
   useEffect(()=>{
     window.scrollTo(0,0)
   },[])
  return (
      <div className='main-hero'>
        <div className='hero-detail'>
           <div className='hero-detail__header'>
               ShopHop
           </div>
           <p className='hero-detail__desc'>
              Your perfect destination for everyday use and walks in the streets. Your everyday bazar.
           </p>
           <div className='swipe-btn'>
              <button className='btn' onClick={scrollHandle}>tap to see varieties</button>
           </div>
        </div>
        <HeroComp/>
      </div>
  )
}

export default Hero