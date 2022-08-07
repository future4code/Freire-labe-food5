import React, { useState,  useContext,} from 'react'
import styled from 'styled-components'
import {Footer} from '../../components/Footer/Footer'
import { placeOrder, useRequestData } from '../../services/requisicoes'
import { BASE_URL } from '../../constants/urls'
import { GlobalContext } from '../../context/GlobalContext'
import CartCard from '../../components/CartCard/CartCard'
// import {Container, Header, Conteudo, DivAddress, DivTotal, DivFrete, PEndereco, PEndereco1, Hr, Button, PCart, PTotal, Pag, Div, Div1}
export const Container = styled.div`
    display: grid;
    grid-template-rows: 44px 1fr 49px;
`
export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
    box-shadow: 0 0.5px 0 0 black;
    background-color: #fff;
    p {
        font-size: 20px;
        
    }
`
const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const DivAddress = styled.div`
    position: relative;
    margin: 5px 0;
    padding: 16px;
    background-color: #eeeeee;

`
export const DivTotal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 16px;

`
export const DivFrete = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 16px 14px 0;

`
export const PEndereco = styled.p`
   
  height: 18px;
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`
export const PEndereco1 = styled.p`
   
  height: 18px;
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`
export const Hr = styled.hr`
    width: 90%;
    background: black;
    height: 1px;
    border: none;
    margin: auto;
`
export const Button= styled.button`
    width: 85%;
    height: 42px;
    background-color: #5cb646;
    padding: 12px 16px;
    border-radius: 2px;
    border: none;
    margin-left: 7.5%;
    margin-top: 19px;
    margin-bottom: 16px;
`
export const PCart = styled.p`
    width: 360px;
    height: 42px;
    margin: 8px 0 33px;
    padding: 12px 32px;
    text-align: center;
`
export const PTotal = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  color: #5cb646;
`
export const Pag = styled.p`
    margin: 24px 0 8px 16px;
    font-size: 16px;
    color: black;
`
export const Div = styled.div`
    margin: 8px 0 0 16px;
`
export const Div1 = styled.div`
    margin: 11px 0 0 16px;
`

export const P1 = styled.p`
  height: 18px;
  margin: 5px 0 8px 16px;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;`
export const P2 = styled.p`
  height: 18px;
  margin: 0 0 8px 16px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;`
export const P3 = styled.p`
  height: 18px;
  margin: 0 0 8px 16px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;`

const CartPage = () => {
    const [
        profile, 
        // isloading, 
        // error, 
        // getDate
    ] = useRequestData(`${BASE_URL}/profile`)

    const [payment, setPayment] = useState('')

    const { cart, setCart } = useContext(GlobalContext)
    let body
    const carrinho = cart.filter((cart) => {
       return cart.price !== undefined
    })
    const carrinho2 = carrinho.map((cart) => {
        return <CartCard cart = {cart}/>
    })

    const qnt = carrinho.map((cart) => {
        return body = {id: cart.id, quantity: Number(cart.quantity)}
    })

    const valorTotal = () => {
        let valor = 0

        for(let item of carrinho){
            valor += item.price * item.quantity
        }
        return valor
    }
    body = qnt
    const onChangeValue = (event) => {
        setPayment(event.target.value)
    }
    const PaymentMethod = (event) => {
        event.preventDefault()
        const url = `${BASE_URL}/restaurants/${cart[0].id}/order`
        placeOrder(url, body, payment)
    }
    return(
        <Container>
            <Header>
                <p>Meu carrinho</p>
            </Header>
            <Conteudo>
                <DivAddress>
                    <PEndereco>Endereço de entrega</PEndereco>
                    <PEndereco1>{profile?.user?.address}</PEndereco1>
                    </DivAddress>
                {cart.length > 0 ? 
                <>{cart[0] ? <div>
                    <P1>{cart[0].name}</P1>
                    <P2>{cart[0].address}</P2>
                    <P3>{cart[0].deliveryTime} min</P3>
                    {carrinho2}
                    <DivFrete> <p>Frete: R${cart[0].shipping},00</p></DivFrete>
                <DivTotal><p>SUBTOTAL</p> <PTotal>R${(valorTotal() + cart[0].shipping).toFixed(2)}</PTotal></DivTotal>
                <Pag>Forma de pagamento</Pag>
                <Hr />
                <form onSubmit={PaymentMethod}>
                <Div>
                <input name = 'money' value = 'money' type="radio" id = 'money' checked = {payment === 'money'} onChange = {onChangeValue}/>
                <label htmlFor="money">Dinheiro</label>
                </Div>
                <Div1>
                <input name = 'money' value = 'creditcard' type="radio" id = 'creditcard' checked = {payment === 'creditcard'}  onChange = {onChangeValue} />
                <label htmlFor="creditcard">Cartão de Crédito</label>
                </Div1>
                <Button><strong>Confirmar</strong></Button>

                </form>
                </div> : <div></div>}</> : <><PCart>Carrinho vazio</PCart> 
                <DivFrete> <p>Frete: R$00.00</p></DivFrete>
                <DivTotal><p>SUBTOTAL</p> <PTotal>R$00.00</PTotal></DivTotal>
                <Pag>Forma de pagamento</Pag>
                <Hr />
                
                <Div>
                <input name = 'money' type="radio" id = 'money' defaultChecked/>
                <label htmlFor="money">Dinheiro</label>
                </Div>
                <Div1>
                <input name = 'money' type="radio" id = 'creditcard'  />
                <label htmlFor="creditcard">Cartão de Crédito</label>
                </Div1>
                <Button><strong>Confirmar</strong></Button> </>}
                
                
            </Conteudo>
            <Footer />

        </Container>
    )
}
export default CartPage