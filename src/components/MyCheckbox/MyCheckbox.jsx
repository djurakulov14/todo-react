import React from 'react'
import classes from './MyCheckbox.module.scss'

export const MyCheckbox = (props) => {
  return (
    <label className={classes.checkbox}>
        <h4>completed</h4>
        <input type="checkbox" {...props} className={`${classes.checkbox_input} ${classes.inp_long}`}/>
        <div className={classes.checkbox_div}></div>
    </label>
  )
}
