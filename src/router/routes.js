import React from 'react';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import LoginPage from '../pages/LoginPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import SignUpPage from '../pages/SignUpPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import PreLoginPage from '../pages/PreLoginPage';
import AddressPage from '../pages/AddressPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
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