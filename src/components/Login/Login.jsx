import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/Auth'
import { MyButton } from '../MyButton/MyButton'
import MyInput from '../MyInput/MyInput'
import classes from './Login.module.scss'

export const Login = () => {
  const [info, setInfo] = useState({name: '', password: ''})
  
  const {auth, setAuth} = useContext(AuthContext)
  
  const login = event => {
      event.preventDefault()
      if(info.name == '' || info.password == ''){
        alert("Заполните поле")
      } else {
        setAuth(info)
        localStorage.setItem('auth', true)
      }

  }

  return (
    <div className={classes.Login}>
      <h1>Log in</h1>
        <form>
            <MyInput
              type="text"
              placeholder="Name"
              required
              onChange={e => 
              setInfo({...info, name: e.target.value})}/>
            <MyInput
              type="password"
              placeholder="Password"
              required
              onChange={e => setInfo({...info, password: e.target.value})}/>
            <MyButton onClick={login}>Log in</MyButton>
        </form>
    </div>
  )
}
