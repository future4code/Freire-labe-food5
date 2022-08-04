import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom'

// component
import LoginPage from '../pages/LoginPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import SignUpPage from '../pages/SignUpPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import AddressPage from '../pages/AddressPage'
import PreLoginPage from '../pages/PreLoginPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import EditAddressPage  from '../pages/EditAddressPage/EditAddressPage';
import EditProfilePage  from '../pages/EditProfilePage/EditProfilePage';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<PreLoginPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/cadastro" exact element={<SignUpPage/>}/>
            <Route path="/feed" exact element={<FeedPage/>}/>
            <Route path="/feed/search" exact element={<SearchPage />}/>
            <Route path="/endereco"exact element={<AddressPage/>}/>
            <Route path="/perfil"exact element={<ProfilePage/>}/>
            <Route path="/perfil/editarPerfil"exact element={<EditProfilePage/>}/>
            <Route path="/perfil/editarEndereco"exact element={<EditAddressPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router