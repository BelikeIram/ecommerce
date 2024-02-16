import React from 'react'
import classes from "./style.module.scss"

const Box = ({children}) => {
  return (
    <aside className={`${classes.box}`}>
        {children}
    </aside>
  )
}

export default Box