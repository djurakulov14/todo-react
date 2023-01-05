import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EditForm } from '../EditForm'
import { MyButton } from '../MyButton/MyButton'
import MyModal from '../MyModal/MyModal'
import classes from './MyPost.module.scss'


export const MyPost = ({item, remove, number}) => {
  const [post, setPost] = useState(item)
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate('/postPage')
  
  const showPostPage = () => {
     navigate('/postPage', {state: item.id})
  }

  const completedStyles = {
    fontWeight: 600,
    color: '#00ff00'  
  }
  
  const UNcompletedStyles = {
    fontWeight: 600,
    color: 'red'  
  }


  return (
      <div className={classes.MyPosts}>
        <h2>{number}.{item.title}</h2>
        {item.completed ? <p style={completedStyles}>completed</p> : <p style={UNcompletedStyles}>uncompleted</p>}
        <MyButton onClick={(e) => remove(item)}>Удалить</MyButton>
        <MyButton onClick={showPostPage}>Открыть</MyButton>
        <MyButton onClick={() => setVisible(true)}>изменить</MyButton>
        <MyModal visible={visible} setVisible={setVisible}><EditForm setVisible={setVisible} post={post} setPost={setPost}/></MyModal>
      </div>
  )
}
