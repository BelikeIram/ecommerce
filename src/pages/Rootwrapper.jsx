import React,{useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../containers/Footer/Footer'
import Navbar from '../containers/Navbar/Navbar'
import { useDispatch,useSelector } from 'react-redux'
import { fetchItems, sendData } from '../store/cart-actions'
import toast, {Toaster} from 'react-hot-toast'
import ModelComp from '../components/shop-model/ModelComp'
import CartComp from '../components/CartContainer/CartComp'


 
let firstTime = true;
const Rootwrapper = () => {
  const [isAuth, setIsAuth] = useState(false)
   const [isCartShown, setIsCartShown] = useState(false)
   const uiState = useSelector((state)=>state.ui)
   const productState = useSelector((state)=>state.products)
   const dispatch = useDispatch()



   useEffect(()=>{


      dispatch(fetchItems())
   },[dispatch])


   useEffect(()=>{
     if(firstTime){
       firstTime = false;
       return
     }

    dispatch(sendData(productState))
    
 },[productState, dispatch])

 useEffect(()=>{
   if(productState.changed){
       toast.success("Sent to cart!",{
         duration : 1000
       })
   }
 },[uiState.showNotification])

  return (
    <>
     <div className={`main-parent ${uiState.isCartShown ? "cart-shown" : ""}`}>
     <CartComp/>
     <Navbar isAuth={isAuth} setIsAuth={setIsAuth} isCartShown={isCartShown} setIsCartShown={setIsCartShown}/>
     <div className={` parent container-fluid`} onMouseOver={()=>{
      setIsAuth(false)
      setIsCartShown(false)
     }}>
     <Toaster/>
     <ModelComp/>
     <Outlet/>
     </div>
     <Footer/>
     </div>
    </>
  )
}

export default Rootwrapper