import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/Auth';
import { MyButton } from './MyButton/MyButton';
import MyModal from './MyModal/MyModal';
import PostFilter from './PostFilter';
import PostForm from './PostForm';

export default function Header({arr ,setArr, filter, setFilter, id, dispatch}) {
  const {auth, setAuth} = useContext(AuthContext)


    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const [visible, setVisible] = useState(false)

    const createPost = (newPost) => {
      dispatch({type: "ADD", payload:newPost})
      console.log(newPost);
      setVisible(false)
    }


  return (
    <header>
        <h1>TO DOs for {day}.{month}.{year}</h1>
        {id ?
        <h1>Вы открыли задание с id:{id}</h1>
        :
        <>
        <MyButton 
        style={{backgroundColor: "white"}} 
        onClick={() => { setVisible(!visible) }}>Add task</MyButton>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <MyModal visible={visible} setVisible={setVisible}><PostForm create={createPost}/></MyModal>
        </>
        }
        
    </header>
  )
}
