import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollContainer from "react-indiana-drag-scroll"
import SearchIcon from '../../assets/img/search_icon.svg'
import CardRestaurant from '../../components/CardRestaurantFeed/CardRestaurant'
import { Footer } from '../../components/Footer/Footer'
import ActiveOrder from '../../components/ActiveOrder/ActiveOrder'
import { goToRestaurantMenu, goToSearch } from '../../router/coordinator'
import { GetRestaurants, restaurantsCategories } from '../../services/restaurants'
import { GlobalStyle, MainContainer, SearchContainer, InputStyled, CategoriasContainer, CategoriaLi, Header } from './styled'

const FeedPage = () => {
    const navigate = useNavigate()
    const [listaRestaurantes, setListaRestaurantes] = useState([])
    const [categoria, setCategoria] = useState('')

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
                onClick={() => goToRestaurantMenu(navigate, restaurante.id)}
            />
        )
    })
    
    return (
        <div>
            <GlobalStyle />
            <Header>FutureEats</Header>
            <MainContainer>
                <SearchContainer onClick={() => goToSearch(navigate)}>
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
            <ActiveOrder/>
            <Footer />
        </div>
    )
}

export default FeedPage