import React,{useEffect, useState} from 'react'
import Category from '../Category/Category'
import useFetch from '../../../Hook/useFetch'

const ProductVarities = () => {
 
  const {data:topData,loading:toploading,error:topError}  = useFetch('tops')
  const {data:smtData, loading : smtLoading, error: smtError}  = useFetch('smartphones')
  const {data:lapData,loading : lapLoading,error:lapError}  = useFetch('laptops')
  const {data:fragData,loading:fragLoading,error:fragError}  = useFetch('fragrances')
  const {data:groData,loading:groLoading,error:groError}  = useFetch("groceries")



  return (
    <div className='product-cat container-fluid'>
        <Category error={smtError} load={smtLoading} data={smtData?.products} header={smtData?.products[0].category}/>
        <Category error={lapError} load={lapLoading} data={lapData?.products} header={lapData?.products[0].category}/>
        <Category error={fragError} load={fragLoading} data={fragData?.products} header={fragData?.products[0].category}/>
        <Category error={topError} load={toploading} data={topData?.products} header={topData?.products[0].category}/>
        <Category error={groError} load={groLoading} data={groData?.products} header={groData?.products[0].category}/>
    </div>
  )
}

export default ProductVarities