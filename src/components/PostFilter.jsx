import React, { useContext } from 'react';
import { AuthContext } from '../Context/Auth';
import { MyButton } from './MyButton/MyButton';
import MyInput from "./MyInput/MyInput";
import MySelect from "./MySelect/MySelect";

const PostFilter = ({filter, setFilter}) => {
  const {auth, setAuth} = useContext(AuthContext)

  function logOut() {
    setAuth(false)
    localStorage.removeItem('auth')
  }
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            {/* <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            /> */}
            <MyButton style={{backgroundColor: "white"}} onClick={logOut}>Log out</MyButton>
        </div>
    );
};
 
export default PostFilter;
