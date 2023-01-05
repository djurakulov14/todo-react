import React from 'react'
import classes from './Mybutton.module.scss'

export const MyButton = (props) => {
  return (
    <button className={classes.MyButton} {...props}>{props.children}</button>
  )
}
