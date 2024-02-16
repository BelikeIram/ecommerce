import React,{useState} from 'react'

const useForm = () => {
    const [input, setInput] = useState('')
    const [valid, setIsvalid] = useState(true)

    const inputChange = (e, regex)=>{
       setInput(e.target.value)
       if(!regex){
        if(e.target.value.length > 6 || e.target.value == ''){
            setIsvalid(false)
        }else{
            setIsvalid(true)
        }
       }else{
         const bool = regex.test(e.target.value)
         bool ? setIsvalid(true) : setIsvalid(false)
       }
    }
  return {input,valid,inputChange}
}

export default useForm