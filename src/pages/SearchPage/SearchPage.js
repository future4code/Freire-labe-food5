import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchIcon from '../../assets/img/search_icon.svg'
import BackPageIcon from '../../assets/img/back-page_icon.svg'
import CardRestaurant from '../../components/CardRestaurantFeed/CardRestaurant'
import { goBackPage } from '../../router/coordinator'
import { GetRestaurants } from '../../services/restaurants'
import { GlobalStyle, MainContainer, SearchContainer, InputStyled, Header, HeaderIcon, ListaResposta } from './styled'

const SearchPage = () => {
    const navigate = useNavigate()
    const [listaRestaurantes, setListaRestaurantes] = useState([])
    const [ valorInputBusca, setValorInputBusca] = useState('')

    const handleInputBusca = (event) => {
        setValorInputBusca(event.target.value)
    }

    useEffect(() => {
        document.getElementById('inputBusca').focus()
        GetRestaurants(setListaRestaurantes)
    }, [])

    let listaFiltradaPorNome = listaRestaurantes.filter(restaurante => {
        return ((restaurante.name.toUpperCase().includes(valorInputBusca.toUpperCase())) || (restaurante.category.toUpperCase().includes(valorInputBusca.toUpperCase())))
    })

    let listaRestaurantesRender
    if(valorInputBusca === '') {
        listaRestaurantesRender = (
            <ListaResposta>Busque por nome de restaurantes</ListaResposta>
        )
    } else {
        if(listaFiltradaPorNome.length > 0) {
            console.log(listaFiltradaPorNome)
            listaRestaurantesRender = listaFiltradaPorNome.map(restaurante => {
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
        } else {
            listaRestaurantesRender = <ListaResposta>Nenhum resultado encontrado.</ListaResposta>
        }
    }

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
                    <InputStyled 
                        id='inputBusca' 
                        placeholder='Restaurante' 
                        value={valorInputBusca}
                        onChange={handleInputBusca}
                    />
                </SearchContainer>
                <div>
                    {listaRestaurantesRender}
                </div>
            </MainContainer>
        </div>
    )
}

export default SearchPage