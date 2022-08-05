import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { CardContainer, CardImagem, NumeroPedidoContainer, CardInformacao, ProdutoNome, ProdutoDescricao, PedidoContainer, BotaoAdicionarProduto, BotaoRemoverProduto } from './styled'

const CardProdutoMenu = (props) => {
    const {cart, setCart} = useContext(GlobalContext)
    const [numeroNoCart ,setNumeroNoCart] = useState(0)

    useEffect(() => {
        cart.forEach(produto => {
            if(produto.id === props.id) {
                setNumeroNoCart(produto.quantity)
            }
        })
    }, [cart])

    const handleRemoverDoCarrinho = (event) => {
        const idElemento = event.target.id
        cart.forEach((produto, index) => {
            if(idElemento === produto.id) {
                console.log('chegou aqui')
                setCart(prevCart => {
                    let newArray = prevCart
                    newArray.splice(index,1)
                    console.log(newArray)
                    return newArray
                })
            }
        })
        setNumeroNoCart(0)
    }

    return (
        <CardContainer>
            <CardImagem src={props.photoUrl} alt='imagem do produto' />
            <CardInformacao>
                <ProdutoNome>{props.name}</ProdutoNome>
                <ProdutoDescricao>{props.description}</ProdutoDescricao>
                <p>{`R$ ${props.price.toFixed(2)}`}</p>
            </CardInformacao>
            <PedidoContainer>
                <NumeroPedidoContainer>{numeroNoCart}</NumeroPedidoContainer>
                {numeroNoCart === 0 ? <BotaoAdicionarProduto id={props.id} onClick={props.addToCart}>adicionar</BotaoAdicionarProduto> : <BotaoRemoverProduto id={props.id} onClick={handleRemoverDoCarrinho}>Remover</BotaoRemoverProduto>}
            </PedidoContainer>
        </CardContainer>
    )
}

export default CardProdutoMenu