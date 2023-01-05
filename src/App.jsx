import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Pages/HomePage';
import { PostPage } from './Pages/PostPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/postPage' element={<PostPage/>}/>
    </Routes>
  );
}

export default App;
