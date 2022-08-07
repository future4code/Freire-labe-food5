import React, {useContext, useState}from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { CardContainer, CardImagem, NumeroPedidoContainer, CardInformacao, ProdutoNome, ProdutoDescricao, PedidoContainer, BotaoAdicionarProduto, BotaoRemoverProduto } from './styled'
const CartCard = (props) => {
    const { cart, setCart } = useContext(GlobalContext)
    const {description, id, name, photoUrl, price, quantity} = props.cart 
    console.log(props.cart)
    const [quantity1, setQuantity1] = useState(quantity)
    const handleRemoverDoCarrinho = (id1) => {

        setQuantity1(quantity1 - 1)
        if(quantity1 < 1 && id === id1) {
            setCart([])
        }
    }
    return(
        <div>
                <CardContainer>
            <CardImagem src={photoUrl} alt='imagem do produto' />
            <CardInformacao>
                <ProdutoNome>{name}</ProdutoNome>
                <ProdutoDescricao>{description}</ProdutoDescricao>
                <p>{`R$ ${(price*quantity1).toFixed(2)}`}</p>
            </CardInformacao>
            <PedidoContainer>
                <NumeroPedidoContainer>{quantity1}</NumeroPedidoContainer>
                {<BotaoRemoverProduto id={id} onClick = {() => handleRemoverDoCarrinho(id)}>Remover</BotaoRemoverProduto>}
            </PedidoContainer>
        </CardContainer>
        </div>
    )
}


export default CartCard