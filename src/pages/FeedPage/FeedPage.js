import React, { useEffect, useState } from 'react'
import ScrollContainer from "react-indiana-drag-scroll"

import SearchIcon from '../../assets/img/search_icon.svg'
import CardRestaurant from '../../components/CardRestaurantFeed/CardRestaurant'
import { GetRestaurants, restaurantsCategories } from '../../services/restaurants'
import { GlobalStyle, MainContainer, SearchContainer, InputStyled, CategoriasContainer, CategoriaLi, Header } from './styled'

const FeedPage = () => {
    const [listaRestaurantes, setListaRestaurantes] = useState()
    const [categoria, setCategoria] = useState('')
    // Criar um hook para proteger a página
    useEffect(() => {
        GetRestaurants(setListaRestaurantes)
    }, [])

    const handleCategoria = (event) => {
        setCategoria(event.target.id)
    }

    let listaDeCategorias = restaurantsCategories.map((categoria, index) => {
        return (
            <CategoriaLi 
                key={index} 
                id={categoria}
                onClick={handleCategoria}
            >
                {categoria}
            </CategoriaLi>
        )
    })

    let listaFiltradaPorCategoria
    
    if(listaRestaurantes) {
        console.log(listaRestaurantes)
        if(categoria && categoria !== 'Todas') {
            listaFiltradaPorCategoria = listaRestaurantes.filter(restaurante => {
                return categoria === restaurante.category
            })
        } else {
            listaFiltradaPorCategoria = listaRestaurantes
        }
    }

    let listaRestaurantesRender
    listaRestaurantesRender = listaFiltradaPorCategoria?.map(restaurante => {
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
    
    return (
        <div>
            <GlobalStyle />
            <Header>FutureEats</Header>
            <MainContainer>
                <SearchContainer>
                    <img src={SearchIcon} alt='ícone de pesquisa'/>
                    <InputStyled placeholder='Restaurante' />
                </SearchContainer>
                <ScrollContainer>
                    <CategoriasContainer>
                        {listaDeCategorias}
                    </CategoriasContainer>
                </ScrollContainer>
                <div>
                    {listaRestaurantesRender}
                </div>
            </MainContainer>
        </div>
    )
}

export default FeedPage