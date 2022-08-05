import React from 'react'
import styled from 'styled-components'
import { midGreen } from '../../constants/colors'

const ContainerBg = styled.div` 
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContainerCard = styled.div` 
    width: 100%;
    height: 13.5rem;
    background-color: #ffffff;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

const SelectQuantidade = styled.select` 
    width: 100%;
    padding: 1.188rem 1rem;
`

const AdicionaButton = styled.p` 
    align-self: flex-end;
    color: ${midGreen};
    text-transform: uppercase;
`

const QuantidadeCard = (props) => {
    let options = []
    for (let index = 0; index < 11; index++) {
        options.push(
            <option value={index} key={index}>{index}</option>
        )
    }

    return (
        <ContainerBg>
            <ContainerCard>
                <p>Selecione a quantidade desejada</p>
                <SelectQuantidade 
                    name='quantidade'
                    value={props.value}
                    onChange={props.onChange}
                >
                    {options}
                </SelectQuantidade>
                <AdicionaButton onClick={props.onClick}>Adicionar ao Carrinho</AdicionaButton>
            </ContainerCard>
        </ContainerBg>
    )
}

export default QuantidadeCard