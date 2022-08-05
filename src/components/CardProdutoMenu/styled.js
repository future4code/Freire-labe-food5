import styled from "styled-components"
import { gray, midGreen } from "../../constants/colors"

export const CardContainer = styled.div` 
    border-radius: 0.5rem;
    border: solid 1px ${gray};
    width: 100%;
    height: 7rem;
    display: flex;
`

export const CardInformacao = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
`

export const CardImagem = styled.img` 
    height: 100%;
    min-width: 6rem;
`

export const ProdutoNome = styled.p`
    color: ${midGreen};
    margin-bottom: 0.5rem;
    `
export const ProdutoDescricao = styled.p`
    font-size: 0.75rem;
    color: ${gray};
    margin-bottom: 0.25rem;
`

export const NumeroPedidoContainer = styled.div`
    position: fixed;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`