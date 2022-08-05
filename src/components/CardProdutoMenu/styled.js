import styled from "styled-components"
import { gray, midGreen } from "../../constants/colors"

export const CardContainer = styled.div` 
    border-radius: 0.5rem;
    border: solid 1px ${gray};
    width: 100%;
    height: 7rem;
    display: flex;
    margin-bottom: 0.5rem;
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

export const PedidoContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`

export const NumeroPedidoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.063rem;
    height: 2.063rem;
    border-radius: 0 0.5rem 0 0.5rem;
    border: solid 1px ${midGreen};
    color: ${midGreen};
`

export const BotaoAdicionarProduto = styled.div`
    padding: 0.5rem;
    height: 1.938rem;
    border-radius: 0.5rem 0 0.5rem 0;
    border: solid 1px ${midGreen};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${midGreen};
`
export const BotaoRemoverProduto = styled.div`
    padding: 0.5rem;
    height: 1.938rem;
    border-radius: 0.5rem 0 0.5rem 0;
    border: solid 1px #e02020;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e02020;
`