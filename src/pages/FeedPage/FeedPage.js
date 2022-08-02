import React, { useEffect } from 'react'

import SearchIcon from '../../assets/img/search_icon.svg'
import CardRestaurant from '../../components/CardRestaurantFeed/CardRestaurant'
import { GetRestaurants } from '../../services/restaurants'
import { GlobalStyle, MainContainer, SearchContainer, InputStyled, CategoriasContainer, CategoriaLi } from './styled'

const FeedPage = () => {
    // Criar um hook para proteger a página
    // useEffect(() => {
    //     GetRestaurants()
    // }, [])

    return (
        <MainContainer>
            <GlobalStyle />
            <SearchContainer>
                <img src={SearchIcon} alt='ícone de pesquisa'/>
                <InputStyled placeholder='Restaurante' />
            </SearchContainer>
            <CategoriasContainer>
                {/* falta criar uma lista com todas as categorias e aprender a fazer um slider */}
                <CategoriaLi>Burger</CategoriaLi>
                <CategoriaLi>Asiática</CategoriaLi>
                <CategoriaLi>Massas</CategoriaLi>
                <CategoriaLi>Saudáveis</CategoriaLi>
            </CategoriasContainer>
            <div>
                {/* card teste */}
                <CardRestaurant 
                    logoUrl={'https://pesweb.azureedge.net/spimg/restaurantphotos/5-star-hotel-porto-restaurant-details-new.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=70&w=775&h=530&mode=crop'}
                    name={'Restaurante teste'}
                    deliveryTime={10}
                    shipping={20}
                />
            </div>
        </MainContainer>
    )
}

export default FeedPage