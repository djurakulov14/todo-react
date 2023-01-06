import React, {useState} from 'react';
import MyInput from "./MyInput/MyInput";
import {MyButton} from "./MyButton/MyButton";
import { v4 as uuidv4 } from 'uuid';
import { useHttp } from '../hook/useHTTP';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const {request, error, loading} = useHttp()


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: uuidv4(), completed: false
        }
        request('http://localhost:7777/todos',"POST", JSON.stringify(newPost))
        setPost({title: '', body: ''})
        create(newPost)
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название Задания"
            />
            <MyButton onClick={addNewPost}>Создать Задание</MyButton>
        </form>
    );
};

export default PostForm;
