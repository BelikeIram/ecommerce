import React,{useState, useEffect} from 'react'
import classes from './style.module.scss'
import {  useLoaderData,useParams } from 'react-router-dom'
import Rating from '../../components/Rating/Rating'
import Category from '../Home/Category/Category'
import useFetch from '../../Hook/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import {addProduct} from '../../store/cartSlice'

const ProductInfo = () => {
    const [val, setVal] = useState(0)
    const dispatch = useDispatch()
  const {cat,ind} = useParams()
  console.log(cat.ind);
  const {data:relatedData,loading, error}  = useFetch(cat)
  const data = useLoaderData()
  const product = useSelector((state)=>state.products)
  
  const filteredData = relatedData?.products.filter((item)=> item.id !== +ind)

  const handleDec = ()=>{
      if(val == 0){
          return
      }else{
          setVal((prev)=>prev-1)
      }
  }

  const addToCart = ()=>{
      dispatch(addProduct({
          id : data.id,
          title : data.title,
          brand : data.brand,
          thumbnail : data.thumbnail,
          price : data.price,
          qty : val
      }))
  }

  useEffect(()=>{
     window.scrollTo(0,0)
  },[])


  return (
    <div className={`container-fluid ${classes.product} mt-5 mt-md`}>
       <div className={`row justify-content-between`}>
          <div className='col-md-5 col-12'>
              <div className={`${classes['product-img']} w-100`}>
                  <img className='object-fit object-fit-cover w-100 h-100' src={data.thumbnail}/>
              </div>
          </div>
          <div className='col-md-6 col-12 my-lg-0 my-3'>
              <div className={`${classes['product-header']}`}>
                   <div className={`my-2 ${classes['product-title']}`}>{data.title}</div>
                   <div className={`my-2 ${classes['product-brand']}`}>Brand : {data.brand}</div>
              </div>
              <div className={`${classes['product-info']} row`}>
                  <div className = {`my-2 ${classes['product-desc']} col-12`}>{data.description}</div>
                  <div className = {`my-2 ${classes['product-rating']} col-6`}> 
                     <span>Rating :</span> <Rating rate={data.rating}/> 
                     {data.rating} 
                     </div>
                  <div className = {`my-2 ${classes['product-stock']} col-6`}> <span>total stock : </span> {data.stock}</div>
                  <div className = {`my-2 ${classes['product-price']} col-12`}> <span>Price : </span> {data.price}$</div>
                  <div className = {`my-2 ${classes['product-discount']} col-12`}> <span>Discount : </span> {data.discountPercentage}%</div>
              </div>
              <div className={`${classes['product-adding']} row justify-content-md-start justify-content-center mt-3 pl-3`}>
                  <button className='col-2' onClick={()=>setVal(prev => prev+1)}>+</button>
                  <span className='col-2'>{val}</span>
                  <button className='col-2' onClick={handleDec}>-</button>
              </div>
              <div className={`${classes['product-adding']} row justify-content-md-start justify-content-center mt-3 pl-3`}>
                   <button className='col-6' onClick={addToCart}>Add</button>
              </div>
          </div>
       </div>
       <div className='my-3'>
           <Category error={error} load={loading} data={filteredData} header={'Related Products'} fromProductInfo={true}/>
       </div>

    </div>
  )
}

export default ProductInfo



export const loader = async(route)=>{

    const index = route.params.ind
    
    const response = await fetch(`https://dummyjson.com/products/${index}`)
    return response.json()
}