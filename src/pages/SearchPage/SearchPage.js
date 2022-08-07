//Bibliotecas
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//Arquivos locais
import SearchIcon from '../../assets/img/search_icon.svg'
import BackPageIcon from '../../assets/img/back-page_icon.svg'
import CardRestaurant from '../../components/CardRestaurantFeed/CardRestaurant'
import useProtectedPage from '../../hooks/useProtectedPage'
import { goBackPage, goToRestaurantMenu } from '../../router/coordinator'
import { GetRestaurants } from '../../services/restaurants'
import { GlobalStyle, MainContainer, SearchContainer, InputStyled, Header, HeaderIcon, ListaResposta } from './styled'

const SearchPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const [listaRestaurantes, setListaRestaurantes] = useState([])
    const [ valorInputBusca, setValorInputBusca] = useState('')

    //contralador de input
    const handleInputBusca = (event) => {
        setValorInputBusca(event.target.value)
    }

    useEffect(() => {
        //dar foco ao input assim que a página carregar
        document.getElementById('inputBusca').focus()
        //recebe a lista de restaurantes
        GetRestaurants(setListaRestaurantes)
    }, [])


    //filtra a lista de restaurante por nome ou categoria
    let listaFiltradaPorNome = listaRestaurantes.filter(restaurante => {
        return ((restaurante.name.toUpperCase().includes(valorInputBusca.toUpperCase())) || (restaurante.category.toUpperCase().includes(valorInputBusca.toUpperCase())))
    })


    //Criar o JSX para a lista de restaurantes
    let listaRestaurantesRender
    if(valorInputBusca === '') {
        // se o input estiver vazio mostra uma mensagem
        listaRestaurantesRender = (
            <ListaResposta>Busque por nome de restaurantes</ListaResposta>
        )
    } else {
        if(listaFiltradaPorNome.length > 0) {
            //mostra a lista de restaurantes filtrada
            listaRestaurantesRender = listaFiltradaPorNome.map(restaurante => {
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
        } else {
            // mostra uma mensagem para resultados não encontrados
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