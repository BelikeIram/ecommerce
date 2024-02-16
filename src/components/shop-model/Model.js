import React from 'react'
import ReactDOM from 'react-dom'

const Model = ({children}) => {
   const model = document.getElementById('happy-shop')
  return (
    ReactDOM.createPortal(children, model)
  )
}

export default Model