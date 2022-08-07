//Bibliotecas
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollContainer from "react-indiana-drag-scroll"
//Arquivos locais
import SearchIcon from '../../assets/img/search_icon.svg'
import CardRestaurant from '../../components/CardRestaurantFeed/CardRestaurant'
import ActiveOrder from '../../components/ActiveOrder/ActiveOrder'
import { Footer } from '../../components/Footer/Footer'
import { goToRestaurantMenu, goToSearch, useProtectedPage } from '../../router/coordinator'
import { GetRestaurants, restaurantsCategories } from '../../services/restaurants'
import { GlobalStyle, MainContainer, SearchContainer, InputStyled, CategoriasContainer, CategoriaLi, Header } from './styled'

const FeedPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const [listaRestaurantes, setListaRestaurantes] = useState([])
    const [categoria, setCategoria] = useState('')

    useEffect(() => {
        // recebe a lista de restaurantes na primeira inicialização
        GetRestaurants(setListaRestaurantes)
    }, [])

    useProtectedPage(navigate)

    //altera o estado com a categoria selecionada
    const handleCategoria = (event) => {
        setCategoria(event.target.id)
    }

    // faz um map na lista de categorias estática que foi importada e cria uma lista JSX com cada categoria
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
        // Se uma categoria diferente de 'todas' foi selecionada a lista é filtrada com os restaurantes que são parte desta categoria
        if(categoria && categoria !== 'Todas') {
            listaFiltradaPorCategoria = listaRestaurantes.filter(restaurante => {
                return categoria === restaurante.category
            })
        } else {
            // a lista de restaurantes continua a mesma
            listaFiltradaPorCategoria = listaRestaurantes
        }
    }

    // mapeia a lista de restaurantes filtrada ou não e transforma em JSX
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
                {/* Scroll da biblioteca react-indiana-drag que permite puxar os elementos com o toque */}
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