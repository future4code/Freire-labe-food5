import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom'

// component
import LoginPage from '../pages/LoginPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import SignUpPage from '../pages/SignUpPage';
<<<<<<< HEAD
import SearchPage from '../pages/SearchPage/SearchPage';
=======
import AddressPage from '../pages/AddressPage'
import PreLoginPage from '../pages/PreLoginPage';
>>>>>>> master

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<PreLoginPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/cadastro" exact element={<SignUpPage/>}/>
<<<<<<< HEAD
            <Route path="/feed" exact element={<FeedPage/>}/>
            <Route path="/feed/search" exact element={<SearchPage />}/>
=======
            <Route path="/endereco"exact element={<AddressPage/>}/>
>>>>>>> master
        </Routes>
    </BrowserRouter>
  )
}

export default Router