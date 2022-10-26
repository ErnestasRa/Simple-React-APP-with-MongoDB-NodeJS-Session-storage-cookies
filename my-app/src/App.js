import * as React from 'react'
import './App.css'
import RegisterPage from './pages/register-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostPage from './pages/post-page';
import MainPage from './pages/main-page';

function App() {
 
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/createpost" element={<PostPage />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
