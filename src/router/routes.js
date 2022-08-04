import React from 'react';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import LoginPage from '../pages/LoginPage';
import PreLoginPage from '../pages/PreLoginPage';
import SignupPage from '../pages/SignupPage';
import AddressPage from '../pages/AddressPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route exact path='/' element={<PreLoginPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/cadastro' element={<SignupPage />} />
                <Route path='/endereco' element={<AddressPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;