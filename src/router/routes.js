import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom'

// component
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import AddressPage from '../pages/AddressPage'
import PreLoginPage from '../pages/PreLoginPage';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<PreLoginPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/cadastro" exact element={<SignUpPage/>}/>
            <Route path="/endereco"exact element={<AddressPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router