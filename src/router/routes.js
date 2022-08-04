import React from 'react';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import LoginPage from '../pages/LoginPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import PreLoginPage from '../pages/PreLoginPage';
import AddressPage from '../pages/AddressPage';
import SignupPage from '../pages/SignupPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PreLoginPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/cadastro' element={<SignupPage />} />
                <Route path='/endereco' element={<AddressPage />} />
                <Route path="/feed" exact element={<FeedPage />} />
                <Route path="/feed/search" exact element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;