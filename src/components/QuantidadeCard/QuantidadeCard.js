import React from 'react'
import styled from 'styled-components'
import { midGreen } from '../../constants/colors'

const ContainerBg = styled.div` 
    align-items: center;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    left: 0;
    min-height: 100vh;
    padding: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
`

const ContainerCard = styled.div` 
    align-items: center;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    height: 13.5rem;
    justify-content: space-around;
    padding: 1rem;
    width: 100%;
`

const SelectQuantidade = styled.select` 
    padding: 1.188rem 1rem;
    width: 100%;
`

const AdicionaButton = styled.p` 
    align-self: flex-end;
    color: ${midGreen};
    text-transform: uppercase;
`

const QuantidadeCard = (props) => {
    let options = []
    //criar as options do select de 0 a 10
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