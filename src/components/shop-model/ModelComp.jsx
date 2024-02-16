import React from 'react'
import Model from './Model'
import { EmptyBag } from '../../assets'
import classes from './Modal.module.scss'
import { uiSlice } from '../../store/ui-slice'
import { useSelector } from 'react-redux'
const ModelComp = () => {
  const ui = useSelector((state)=>state.ui)

  return (
    <Model>
        <div className={`${classes.modal} ${ui.showModal ? classes.active : ''}`}>
           <div className={classes['main-modal']}>
               <div className={`${classes['modal-body']} row p-4`}>
                  <div className={`${classes['modal-left']} col-md-6 col-12`}>
                     <img src={EmptyBag} alt='bag'/>
                  </div>
                  <div className={`${classes['modal-right']} col-md-6 col-12`}>
                     <p>Happy! Shopping</p>
                  </div>
               </div>
           </div>
        </div>
    </Model>
  )
}

export default ModelComp