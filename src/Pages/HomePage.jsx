import React, { useEffect, useMemo, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Header from '../components/Header'
import Loader from '../components/Loader/Loader'
import { MyPost } from '../components/MyPosts/MyPost'
import { useHttp } from '../hook/useHTTP'

export const HomePage = () => {
    const [arr, setArr] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})

    const {request, error, loading} = useHttp()

    useEffect(() => {
      request('http://localhost:7777/todos')
        .then(res => {
          setArr(res)
        })
    }, [])

    const removePost = (post) => {
      request('http://localhost:7777/todos/' + post.id,"DELETE")
      setArr(arr.filter(p => p.id !== post.id))
    }

    const sortedPosts = useMemo(() => {
        if(filter.sort){
            return [...arr].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return arr
    },[filter.sort, arr])

    const searchedPosts = useMemo(() => {
        return sortedPosts.filter(item => item.title.toLowerCase().includes(filter.query.toLocaleLowerCase()))
    },[filter.query, arr])
    

    if(loading == true){
      return <Loader/>
    }


  return (
    <>
        <Header filter={filter} setFilter={setFilter} arr={arr} setArr={setArr} />
        {
          searchedPosts.length == 0 ? 
          <center><h1>Ничего не найдено!</h1></center>
          :
          loading ? <Loader/>
          :
          <div className="container">
            <TransitionGroup>
              {searchedPosts.map((item, index) => 
              <CSSTransition
              key={item.id}
              timeout={500}
              classNames="item"
            >
              <MyPost key={item.id} item={item} number={index + 1} remove={removePost}/>
              </CSSTransition>
              )}
            </TransitionGroup>
          </div>
        }
    </>
  )
}
