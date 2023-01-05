import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import { useHttp } from '../hook/useHTTP'

export const PostPage = () => {
  const [info, setInfo] = useState({})

  const {state} = useLocation()

  // const {request, error, loading} = useHttp()

  // useEffect(() => {
  //   request('http://localhost:7777/todos/' + state)
  //     .then(res => setInfo(res))
  // }, [])

  const completedStyles = {
    fontWeight: 600,
    color: '#00ff00'  
  }
  
  const UNcompletedStyles = {
    fontWeight: 600,
    color: 'red'  
  }

  return (
    <>
    <Header id={state}/>
    {/* <div className='postPage'>
      <h1>{info.title}</h1>
      {info.completed ? <h3 style={completedStyles}>completed</h3> : <h3 style={UNcompletedStyles}>uncompleted</h3>}
    </div> */}
    </>
  )
}
