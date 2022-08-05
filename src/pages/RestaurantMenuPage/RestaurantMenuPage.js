import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackPageIcon from '../../assets/img/back-page_icon.svg'
import CardProdutoMenu from '../../components/CardProdutoMenu/CardProdutoMenu'
import { goBackPage } from '../../router/coordinator'
import { GetRestaurantDetail } from '../../services/restaurants'
import { GlobalContext } from '../../context/GlobalContext'
import { GlobalStyle, MainContainer, Header, HeaderIcon, RestaurantDetailsContainer, RestaurantLogo, RestaurantName, CategoriaTitle, CategoriaLine} from './styled'
import QuantidadeCard from '../../components/QuantidadeCard/QuantidadeCard'

const RestaurantMenuPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [restaurant, setRestaurant] = useState({})
    const productCategories = [...new Set(restaurant?.products?.map(produto => produto.category))]
    const [adicionandoProduto, setAdicionandoProduto] = useState(false)
    const [idProduto, setIdProduto] = useState('')
    const [quantidadeProduto, setQuantidadeProduto] = useState(0)
    const { cart, setCart } = useContext(GlobalContext)

    useEffect(() => {
        GetRestaurantDetail(id, setRestaurant)
    }, [])

    const handleAddToCart = (event) => {
        setAdicionandoProduto(true)
        setIdProduto(event.target.id)
    }

    const handleSelectChange = (event) => {
        setQuantidadeProduto(event.target.value)
    }

    const adicionarAoCarrinho = (event) => {
        restaurant.products.forEach(produto => {
            if(idProduto === produto.id) {
                let produtoComQuantidade = {...produto, quantity: quantidadeProduto}
                setCart(prevCart => [...prevCart, produtoComQuantidade])
            }
        })
        setAdicionandoProduto(false)
        alert('Produto adicionado!')
    }

    let produtosDoRestaurante = productCategories.map((categoria, i) => {
        return (
            <section key={i}>
                <CategoriaTitle>{categoria}</CategoriaTitle>
                <CategoriaLine />
                <ul>
                    {restaurant.products.map(produto => {
                        if(produto.category === categoria) {
                            return (
                                <CardProdutoMenu 
                                    name={produto.name}
                                    description={produto.description}
                                    price={produto.price}
                                    key={produto.id}
                                    photoUrl={produto.photoUrl}
                                    id={produto.id}
                                    addToCart={handleAddToCart}
                                />
                            )
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
                {adicionandoProduto && <QuantidadeCard value={quantidadeProduto} onChange={handleSelectChange} onClick={adicionarAoCarrinho}/>}
            </MainContainer>
        </div>
    )
}

export default RestaurantMenuPage