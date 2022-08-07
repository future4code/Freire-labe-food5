import React from 'react'
import { BASE_URL } from '../../constants/urls'
import { useRequestData} from '../../services/requisicoes'
import styled from 'styled-components'
import clock from '../../assets/img/clock.svg'
export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 118px;
    bottom: 49px;
    padding: 24px;
    background-color: #5cb646;
    display: flex;
`
export const P1 = styled.p`
    width: 256px;
    margin: 0 0 0 24px;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #fff;
`
export const P2 = styled.p`
    width: 256px;
    margin: 8px 0 8px 24px;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: black;
`
export const P3 = styled.p`
    width: 256px;
    margin: 0 0 0 24px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.39px;
    color: black;
`
export const Img = styled.img`
    width: 32px;
    height: 32px;
    margin: 15px 0 0 0;
`
export const Div1 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -6px;
`

const ActiveOrder = () => {
    const [person, isloading, error] = useRequestData(`${BASE_URL}/active-order`)
    console.log(person.order)
    return(
        <>
        {person.order !== null ? <Container>
        <Img src={clock} alt="" />
        <Div1>
        <P1>Pedido em andamento</P1>
       <P2>{person?.order?.restaurantName}</P2> 
       <P3> SUBTOTAL R${person?.order?.totalPrice.toFixed(2)}</P3> 
        </Div1>
    </Container> : <div>a</div> }
        </>
        
    )
}

export default ActiveOrder