import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom'

// component
import LoginPage from '../pages/LoginPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import SignUpPage from '../pages/SignUpPage';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<LoginPage/>}/>
            <Route path="/cadastro" exact element={<SignUpPage/>}/>
            <Route path="/feed" exact element={<FeedPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router