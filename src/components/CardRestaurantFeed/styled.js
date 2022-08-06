import styled from "styled-components"
import { gray, midGreen } from "../../constants/colors"

export const CardContainer = styled.div`
    border: solid 1px ${gray};
    border-radius: 0.5rem;
    margin: 0.5rem 0;
    min-height: 11.75rem;
    width: 100%;
    &:active, &:focus {
        box-shadow: 1px 1px rgba(0, 0, 0, 0.5);
    }
`

export const CardImagem = styled.img` 
    border-radius: 0.5rem 0.5rem 0 0;
    height: 7.5rem;
    width: 100%;
`

export const DescricaoContainer = styled.div` 
    padding: 0.75rem 1rem;
    width: 100%;
`

export const RestaurantName = styled.p` 
    color: ${midGreen};
    font-size: 1rem;
    margin-bottom: 0.25rem;
`

export const RestaurantNumbers = styled.div`
    color: ${gray};
    display: flex;
    justify-content: space-between;
`

