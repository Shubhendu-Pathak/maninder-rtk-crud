import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import { Route, Routes } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import CreatePost from './pages/CreatePost';
import Preview from './pages/Preview';
import Update from './pages/Update';

function App() {
  return (
    <div>
      <MyNav/>
      {/* Add your main app components here */}
      <Routes>
        <Route path='/'  element={<AllPosts />} />
        <Route path='/create'  element={<CreatePost />} />
        <Route path='/preview/:id'  element={<Preview />} />
        <Route path='/update/:id'  element={<Update />} />
      </Routes>
    </div>
  )
}

export default App