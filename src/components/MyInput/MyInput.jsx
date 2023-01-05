import React from 'react'
import classes from './MyInput.module.scss'

const MyInput = (props) => {

  return (
    <input {...props} type="text" className={classes.MyInput}/>
  )

}

export default MyInput
