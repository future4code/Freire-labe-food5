import React from 'react'
import { CardContainer, CardImagem, NumeroPedidoContainer, CardInformacao, ProdutoNome, ProdutoDescricao } from './styled'

const CardProdutoMenu = (props) => {
    return (
        <CardContainer>
            <CardImagem src='https://cozinhalegal.com.br/files/receitas/Hamburguer_Caseiro_4.jpg' alt='imagem do produto' />
            <CardInformacao>
                <ProdutoNome>Nome produto</ProdutoNome>
                <ProdutoDescricao>descriçao</ProdutoDescricao>
                <p>preço</p>
            </CardInformacao>
            <NumeroPedidoContainer>2</NumeroPedidoContainer>
            <NumeroPedidoContainer>adicionar</NumeroPedidoContainer>
        </CardContainer>
    )
}

export default CardProdutoMenu