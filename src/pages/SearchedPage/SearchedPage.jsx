import React from 'react'
import { useLoaderData,useParams } from 'react-router-dom'
import NotFound from '../../components/NotFound/NotFound';
import Product from '../../components/Product/Product';

const SearchedPage = () => {
  const data = useLoaderData();
  const {word} = useParams();

  let up = word.charAt(0).toLocaleUpperCase()
  let searchWord = up + word.slice(1,word.length-1)

  const filteredData = data.products.filter((item)=>item.title.includes(searchWord || word) || item.category.includes(word) || item.description.includes(searchWord || word))
  console.log(filteredData);

  return (
    <div className='row justify-content-center mt-4'>
     {filteredData.map((item)=>{
       return <Product item={item} fromSearch/>
     })}
     {filteredData.length == 0 && <NotFound/>}
    </div>
  )
}

export default SearchedPage



export const loader = async(route)=>{
  const index = route.params.word
    console.log(index);

  const response = await fetch(`https://dummyjson.com/products`)
  return response.json()
}