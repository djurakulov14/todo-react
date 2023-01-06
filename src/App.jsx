import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Login } from './components/Login/Login';
import { AuthContext } from './Context/Auth';
import { HomePage } from './Pages/HomePage';
import { PostPage } from './Pages/PostPage';

function App() {
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    let log = localStorage.getItem('auth')
  }, [])
  

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth
    }}>
      {
        auth ?
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/postPage' element={<PostPage/>}/>
      </Routes>
      :
      <Login/>
      }
  </AuthContext.Provider>
  )
}

export default App;
