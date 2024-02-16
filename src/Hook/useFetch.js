import React,{useState, useEffect} from 'react'

const useFetch = (query) => {
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
  const fetchData = (query)=>{
    try{
        setLoading(true);
        setData(null);
        setError(null);
        fetch(`https://dummyjson.com/products/category/${query}`)
        .then(res => res.json())
        .then((res)=>{
            setLoading(false)
            setData(res)
        });

    }catch(err){
        setLoading(false);
        setError(err);
    }
  }

  useEffect(() => {
     fetchData(query)
  }, [])
  
  return {data,loading,error,fetchData} 
}

export default useFetch