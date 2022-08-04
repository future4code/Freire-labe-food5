import React from 'react';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import LoginPage from '../pages/LoginPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import PreLoginPage from '../pages/PreLoginPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import EditAddressPage  from '../pages/EditAddressPage/EditAddressPage';
import EditProfilePage  from '../pages/EditProfilePage/EditProfilePage';
import AddressPage from '../pages/AddressPage';
import SignupPage from '../pages/SignUpPage'
import RestaurantMenuPage from '../pages/RestaurantMenuPage/RestaurantMenuPage';

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
                <Route path="/feed/restaurant/:id" exact element={<RestaurantMenuPage />} />
                <Route path="/perfil"exact element={<ProfilePage/>}/>
                <Route path="/perfil/editarPerfil"exact element={<EditProfilePage/>}/>
                <Route path="/perfil/editarEndereco"exact element={<EditAddressPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default Router;