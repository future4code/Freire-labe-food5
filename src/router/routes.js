import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom'

// component
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<LoginPage/>}/>
            <Route path="/" exact element={<SignUpPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router