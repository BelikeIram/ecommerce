import React,{useState, useEffect} from 'react'
import classes from './Style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { json, Link,useNavigate } from 'react-router-dom'
import Box from '../../components/nav-box/Box'
import { useSelector, useDispatch } from 'react-redux'
import { IoBag } from "react-icons/io5";

import { cartShown, showModalHandler } from '../../store/ui-slice'
import {emptyCart, handleUser} from '../../store/cartSlice'





const Navbar = ({isAuth, setIsAuth, isCartShown, setIsCartShown}) => {
   const [searchedVal, setSearchedVal] = useState("")
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const productState = useSelector((state)=> state.products)
   const uiSlice = useSelector((state)=>state.ui)

   console.log('user',productState.userInfo, productState.item);

   const mode = Object.keys(productState?.userInfo).length == 0 ? "Register" : "Log In"

 
 useEffect(() => {
   const user = JSON.parse(localStorage.getItem("user"))
   console.log("U",user);
   if(user !== null){
      console.log("bot null");
      dispatch(handleUser({
         username : user.username,
         password : user.password
      }))
   }
 }, [productState])
 

  return (
     <>
    <div className={classes.navbar}>
       <div className={classes.container}>
           <div className={classes["left-block"]}>
               <Link className={classes.logo} to="/">
                  <span>ShopHop</span>
               </Link>
               <div className={classes.search}>
                  <input className={classes['search-input']} type="text" placeholder="search items..." value={searchedVal} onChange={(e)=>setSearchedVal(e.target.value)}/>
                  <Link className={classes.searchedIcon} to={`/searched-keyword/${searchedVal}`}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  </Link>
               </div>
           </div>
           <div className={classes["right-block"]}>
              <ul>
                <li> <Link>HOME</Link></li>
                <li><Link to={`/category/mens-shirts`}>FASHION</Link> </li>
                <li> <Link to={`/category/groceries`}>GROCERY</Link></li>
              </ul>
              <div className={classes.auth} onMouseOver={()=>{
                  setIsCartShown(false)
                  setIsAuth(true)
              }
              }>
              {Object.keys(productState?.userInfo).length != 0 ? <span className={classes.box}>{productState.userInfo.username.charAt(0)}</span> : 
                <>
                <span>
                <i className="fa-solid fa-heart"></i>
                </span>
               
                {isAuth && <Box>
                 <Link className={classes.box} to={`/auth?mode=${mode}`}>
                    <p className={classes.text}>
                       {mode}
                    </p>
                 </Link>
              </Box>
                }
                </>
            }
                
                 
              </div>
              <div className={classes.cart} onMouseOver={()=>{
                  setIsCartShown(true)
                  setIsAuth(false)
              }}>
              
                 <span onClick={()=> {
      
                    dispatch(cartShown())}
                  }>
                 <i className="fa-solid fa-bag-shopping"></i>
                 </span>
                
              </div>
           </div>
       </div>
    </div>
    </>
  )
}

export default Navbar