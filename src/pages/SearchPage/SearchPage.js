import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollContainer from "react-indiana-drag-scroll"

import SearchIcon from '../../assets/img/search_icon.svg'
import BackPageIcon from '../../assets/img/back-page_icon.svg'
import CardRestaurant from '../../components/CardRestaurantFeed/CardRestaurant'
import { goBackPage } from '../../router/cordinator'
import { GetRestaurants } from '../../services/restaurants'
import { GlobalStyle, MainContainer, SearchContainer, InputStyled, Header, HeaderIcon } from './styled'

const SearchPage = () => {
    const navigate = useNavigate()
    const [listaRestaurantes, setListaRestaurantes] = useState()

    useEffect(() => {
        GetRestaurants(setListaRestaurantes)
    }, [])

    let listaRestaurantesRender = (
        <div>Teste</div>
    )

    return (
        <div>
            <GlobalStyle />
            <Header>
                <HeaderIcon src={BackPageIcon} alt='Ícone de seta virada para a esquerda' onClick={() => goBackPage(navigate)} />
                <p>Busca</p>
            </Header>
            <MainContainer>
                <SearchContainer>
                    <img src={SearchIcon} alt='ícone de pesquisa'/>
                    <InputStyled placeholder='Restaurante' />
                </SearchContainer>
                <div>
                    {listaRestaurantesRender}
                </div>
            </MainContainer>
        </div>
    )
}

export default SearchPage