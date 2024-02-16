import React,{useEffect} from 'react'
import { useLoaderData,useParams, useNavigation } from 'react-router-dom'
import NotFound from '../../components/NotFound/NotFound';
import Product from '../../components/Product/Product';
import useFetch from '../../Hook/useFetch';

let first = true
const ProductList = () => {
  const {word} = useParams()

  const  {data,loading,error,fetchData}  = useFetch(word)
  console.log(data);

  useEffect(() => {
     if(first){
         first = false
         return;
     }
     fetchData(word)

  }, [word])
  
  
  return (
    <div className='d-flex flex-column gap-3 align-items-center' >
    <h3 className='mt-4'>List of {word.toUpperCase()}</h3>
    <div className='row justify-content-center mt-4'>
    {loading ? <div style={{height : '100vh'}}><h2>Loading....</h2></div>  : data?.products.map((item)=>{
        return <Product item={item} fromSearch/>
      })}

      </div>
    </div>  
  )
}

export default ProductList
