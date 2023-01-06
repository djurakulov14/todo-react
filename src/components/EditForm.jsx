import React, { useState } from 'react'
import { useHttp } from '../hook/useHTTP'
import { MyButton } from './MyButton/MyButton'
import { MyCheckbox } from './MyCheckbox/MyCheckbox'
import MyInput from './MyInput/MyInput'

export const EditForm = ({setVisible, post, setPost}) => {

  const {request, error, loading} = useHttp()
  const [newPost, setNewPost] = useState(post)

  const EditPost = (e) => {
    e.preventDefault()

    request('http://localhost:7777/todos/' + post.id,"PATCH", JSON.stringify(newPost))
    setPost(newPost)
    setVisible(false)
  }


  return (
    <form>
    <MyInput
        value={newPost.title}
        onChange={e => setNewPost({...post, title: e.target.value})}
        type="text"
        placeholder="Название поста"
    />
    {post.completed ? <MyCheckbox checked onChange={() => setNewPost({...newPost, completed: !newPost.completed})}/> : <MyCheckbox onChange={() => setNewPost({...newPost, completed: !newPost.completed})}/>}
    <MyButton onClick={EditPost} >Edit</MyButton>
</form>
  )
}
