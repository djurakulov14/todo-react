import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/Auth'
import { MyButton } from '../MyButton/MyButton'
import MyInput from '../MyInput/MyInput'

export const Login = () => {
  const [info, setInfo] = useState({name: '', password: ''})

  const {auth, setAuth} = useContext(AuthContext)

  const login = event => {
      event.preventDefault();
      if(info.name == '' || info.password == ''){
        alert("Заполните поле")
      } else {
        setAuth(info);
        localStorage.setItem('auth', 'true')
      }

  }

  return (
    <div>
        <form>
            <MyInput type="text" required onChange={e => setInfo({...info, name: e.target.value})}/>
            <MyInput type="password" required onChange={e => setInfo({...info, password: e.target.value})}/>
            <MyButton onClick={login}>Log in</MyButton>
        </form>
    </div>
  )
}
