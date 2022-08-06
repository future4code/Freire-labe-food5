//Bibliotecas
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//Arquivos locais
import BackPageIcon from '../../assets/img/back-page_icon.svg'
import CardProdutoMenu from '../../components/CardProdutoMenu/CardProdutoMenu'
import QuantidadeCard from '../../components/QuantidadeCard/QuantidadeCard'
import { goBackPage } from '../../router/coordinator'
import { GetRestaurantDetail } from '../../services/restaurants'
import { GlobalContext } from '../../context/GlobalContext'
import { GlobalStyle, MainContainer, Header, HeaderIcon, RestaurantDetailsContainer, RestaurantLogo, RestaurantName, CategoriaTitle, CategoriaLine} from './styled'

const RestaurantMenuPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { cart, setCart } = useContext(GlobalContext)

    const [restaurant, setRestaurant] = useState({})
    const [adicionandoProduto, setAdicionandoProduto] = useState(false)
    const [idProduto, setIdProduto] = useState('')
    const [quantidadeProduto, setQuantidadeProduto] = useState(0)

    const productCategories = [...new Set(restaurant?.products?.map(produto => produto.category))]

    useEffect(() => {
        //Recebe os detalhes do restaurante da API
        GetRestaurantDetail(id, setRestaurant)
    }, [])

    //muda o estado de adicionando produto para renderizar o card de escolher quantidade na frente da página
    //e passa o id do produto delecionado para um estado separado
    const handleAddToCart = (event) => {
        setAdicionandoProduto(true)
        setIdProduto(event.target.id)
    }

    //controlador do select para atualizar o valor no estado
    const handleSelectChange = (event) => {
        setQuantidadeProduto(event.target.value)
    }

    // adiciona ao carrinho no estado global
    const adicionarAoCarrinho = (event) => {
        //faz um map nos produtos do restaurante e verifica qual produto tem o id igual ao do produto selecionado
        restaurant.products.forEach(produto => {
            if(idProduto === produto.id) {
                // cria um novo objeto com os dados do produto mais a quantidade que foi selecionada
                let produtoComQuantidade = {...produto, quantity: quantidadeProduto}
                setCart(prevCart => [...prevCart, produtoComQuantidade])
            }
        })
        //retira o card de quantidade da tela
        setAdicionandoProduto(false)
        alert('Produto adicionado!')
    }

    let produtosDoRestaurante = productCategories.map((categoria, i) => {
        // cria uma seção para cada categoria de produtos
        return (
            <section key={i}>
                <CategoriaTitle>{categoria}</CategoriaTitle>
                <CategoriaLine />
                <ul>
                {/* verifica quais produtos fazem parte da categoria para renderizá-los */}
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