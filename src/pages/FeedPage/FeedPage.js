import React, { useEffect, useState } from 'react'

import SearchIcon from '../../assets/img/search_icon.svg'
import CardRestaurant from '../../components/CardRestaurantFeed/CardRestaurant'
import { GetRestaurants, restaurantsCategories } from '../../services/restaurants'
import { GlobalStyle, MainContainer, SearchContainer, InputStyled, CategoriasContainer, CategoriaLi } from './styled'

const FeedPage = () => {
    const [listaRestaurantes, setListaRestaurantes] = useState()
    // Criar um hook para proteger a página
    useEffect(() => {
        GetRestaurants(setListaRestaurantes)
    }, [])


    let listaRestaurantesRender
    if(listaRestaurantes) {
        console.log(listaRestaurantes)
        listaRestaurantesRender = listaRestaurantes.map(restaurante => {
            return (
                <CardRestaurant
                    key={restaurante.id}
                    logoUrl={restaurante.logoUrl}
                    name={restaurante.name}
                    deliveryTime={restaurante.deliveryTime}
                    shipping={restaurante.shipping}
                />
            )
        })
    }

    let listaDeCategorias = restaurantsCategories.map((categoria, index) => {
        return <CategoriaLi key={index}>{categoria}</CategoriaLi>
    })

    return (
        <MainContainer>
            <GlobalStyle />
            <SearchContainer>
                <img src={SearchIcon} alt='ícone de pesquisa'/>
                <InputStyled placeholder='Restaurante' />
            </SearchContainer>
            <CategoriasContainer>
                {listaDeCategorias}
            </CategoriasContainer>
            <div>
                {listaRestaurantesRender}
            </div>
        </MainContainer>
    )
}

export default FeedPage