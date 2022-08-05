import React, { useState }from 'react'
import {useNavigate} from 'react-router-dom'
import { goToFeed, goToProfilePage, goToCart } from '../../router/coordinator'
import avatar from '../../assets/img/avatar.svg'
import avatarActive from '../../assets/img/avatarActive.svg'
import shoppingCart from '../../assets/img/shopping-cart.svg'
import shoppingCartActive from '../../assets/img/shopping-cartActive.svg'
import homepage from '../../assets/img/homepage.svg'
import homepageActive from '../../assets/img/homepageActive.svg'
import styled from 'styled-components'

 const Container = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid lightgray;
    box-shadow: 0 0 0 0.5px black;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 49px;
`
const ButtonFooter = styled.button`
    background-color: transparent;
    border: none;
    
`

export const Footer = () => {
    const [icone1, setIcone1] = useState(false)
    const [icone2, setIcone2] = useState(false)
    const [icone3, setIcone3] = useState(false)
    const navigate = useNavigate()
    let iconeHome = homepage
    let iconeShop = shoppingCart
    let iconeAvatar = avatar
    if(icone1 === true){
        iconeHome = homepageActive
    }
    if(icone2 === true){
        iconeShop = shoppingCartActive
    }
    if(icone3 === true){
        iconeAvatar = avatarActive
    }
    
    const changeColor = () => {
        setIcone1(true)
        setIcone2(false)
        setIcone3(false)
        goToFeed(navigate)
    }
    const changeColor1 = () => {
        setIcone1(false)
        setIcone2(true)
        setIcone3(false)
        goToCart(navigate)
    }
    const changeColor2 = () => {
        setIcone1(false)
        setIcone2(false)
        setIcone3(true)
        goToProfilePage(navigate)
    }
  
    return(
        <Container>
            <ButtonFooter onClick={() => changeColor()}><img src={iconeHome} alt="" /></ButtonFooter>
            <ButtonFooter onClick={() => changeColor1()}><img src={iconeShop} alt="" /></ButtonFooter>
            <ButtonFooter onClick={() => changeColor2()}><img src={iconeAvatar} alt="" /></ButtonFooter>
        </Container>
    )
}