import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const PName = styled.p`
height: 18px;
  margin: 0 0 9px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;`
const PDate = styled.p`

  height: 18px;
  margin: 9px 0 7px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
 `
const PTotal = styled.p`
  height: 18px;
  margin: 7px 0 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  `

export const CardOrderHistory = (props) => {
    const {restaurantName, totalPrice, createdAt} = props.order
    let dataAtual = new Date(createdAt)
    let dia = dataAtual.getDate();
    let mes
    if (dataAtual.getMonth() == 0){mes = "Janeiro"};
    if (dataAtual.getMonth() == 1){mes = "Fevereiro"};
    if (dataAtual.getMonth() == 2){mes = "Março"};
    if (dataAtual.getMonth() == 3){mes = "Abril"};
    if (dataAtual.getMonth() == 4){mes = "Maio"};
    if (dataAtual.getMonth() == 5){mes = "Junho"};
    if (dataAtual.getMonth() == 6){mes = "Julho"};
    if (dataAtual.getMonth() == 7){mes = "Agosto"};
    if (dataAtual.getMonth() == 8){mes = "Setembro"};
    if (dataAtual.getMonth() == 9){mes = "Outubro"};
    if (dataAtual.getMonth() == 10){mes = "Novembro"};
    if (dataAtual.getMonth() == 11){mes = "Dezembro"};
   
    let ano = dataAtual.getFullYear();
    let data = (dia + " de " + mes + " de " + ano )
    return(
        <Container>
            <PName>{restaurantName}</PName>
            <PDate>{data}</PDate>
            <PTotal>SUBTOTAL R${totalPrice}</PTotal>
        </Container>
    )
}