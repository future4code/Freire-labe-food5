import React from 'react'
import { CardContainer, CardImagem, NumeroPedidoContainer, CardInformacao, ProdutoNome, ProdutoDescricao, PedidoContainer, BotaoAdicionarProduto } from './styled'

const CardProdutoMenu = (props) => {
    return (
        <CardContainer>
            <CardImagem src={props.photoUrl} alt='imagem do produto' />
            <CardInformacao>
                <ProdutoNome>{props.name}</ProdutoNome>
                <ProdutoDescricao>{props.description}</ProdutoDescricao>
                <p>{`R$ ${props.price.toFixed(2)}`}</p>
            </CardInformacao>
            <PedidoContainer>
                <NumeroPedidoContainer>2</NumeroPedidoContainer>
                <BotaoAdicionarProduto>adicionar</BotaoAdicionarProduto>
            </PedidoContainer>
        </CardContainer>
    )
}

export default CardProdutoMenu