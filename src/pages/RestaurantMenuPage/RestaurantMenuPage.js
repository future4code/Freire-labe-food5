import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackPageIcon from '../../assets/img/back-page_icon.svg'
import CardProdutoMenu from '../../components/CardProdutoMenu/CardProdutoMenu'
import { goBackPage } from '../../router/coordinator'
import { GetRestaurantDetail } from '../../services/restaurants'
import { GlobalStyle, MainContainer, Header, HeaderIcon, RestaurantDetailsContainer, RestaurantLogo, RestaurantName, CategoriaTitle, CategoriaLine} from './styled'

const RestaurantMenuPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [restaurant, setRestaurant] = useState({})
    const productCategories = [...new Set(restaurant?.products?.map(produto => produto.category))]

    useEffect(() => {
        GetRestaurantDetail(id, setRestaurant)
    }, [])

    let produtosDoRestaurante = productCategories.map((categoria, i) => {
        return (
            <section key={i}>
                <CategoriaTitle>{categoria}</CategoriaTitle>
                <CategoriaLine />
                <ul>
                    {restaurant.products.map(produto => {
                        if(produto.category === categoria) {
                            return <p key={produto.id}>{produto.name}</p>
                        }
                    })}
                </ul>
            </section>
        )
    }) 
    
    return (
        <div>
            <GlobalStyle />
            <Header>
                <HeaderIcon src={BackPageIcon} alt='Ícone de seta virada para a esquerda' onClick={() => goBackPage(navigate)} />
                <p>Restaurante</p>
            </Header>
            <MainContainer>
                <RestaurantDetailsContainer>
                    <RestaurantLogo src={restaurant.logoUrl} alt='logo do restaurante' />
                    <RestaurantName>{restaurant.name}</RestaurantName>
                    <span>{restaurant.category}</span>
                    <div>
                        <span>{restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min </span>
                        <span>R$ {restaurant?.shipping?.toFixed(2)}</span>
                    </div>
                    <div>
                        {restaurant.address}
                    </div>
                </RestaurantDetailsContainer>
                {produtosDoRestaurante}
                <CardProdutoMenu />
            </MainContainer>
        </div>
    )
}

export default RestaurantMenuPage