import { useEffect, useState, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Login } from './components/Login/Login';
import { AuthContext } from './Context/Auth';
import { useHttp } from './hook/useHTTP';
import { HomePage } from './Pages/HomePage';
import { PostPage } from './Pages/PostPage';
import { reducer } from './Reducer/reducer';


function App() {
  const [arr, setArr] = useState([])
  const [auth, setAuth] = useState(false)
  const {request, error, loading} = useHttp()

  const [state, dispatch] = useReducer(reducer, {arr: arr})

  useEffect(() => {
    let log = localStorage.getItem('auth')
    setAuth(log)
  }, [])
  
  
  useEffect(() => {
    request('http://localhost:7777/todos')
    .then(res => {
      dispatch({type: "SET", payload: res})
    })
  }, [])

  console.log(state);

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth
    }}>
      {
        auth ?
      <Routes>
        <Route path='/' element={<HomePage arr={state?.arr} setArr={setArr} dispatch={dispatch}/>}/>
        <Route path='/postPage' element={<PostPage/>}/>
      </Routes>
      :
      <Login/>
      }
  </AuthContext.Provider>
  )
}

export default App;
