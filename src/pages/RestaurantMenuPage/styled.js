import styled, { createGlobalStyle } from "styled-components"
import { gray, midGreen } from "../../constants/colors"

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        letter-spacing: -0.39px;
        margin: 0;
        padding: 0;
    }
    ul {
        list-style-type: none;
    }
`

export const Header = styled.header` 
    align-items: center ;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    display: grid;
    font-size: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    height: 2.75rem;
    justify-items: center;
    padding: 0 1rem;
    width: 100%;
`

export const HeaderIcon = styled.img` 
    justify-self: flex-start;
`

export const MainContainer = styled.main` 
    padding: 0.5rem 1rem 4rem;
    width: 100%;
`

export const RestaurantDetailsContainer = styled.section` 
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0 1rem 0;
    width: 100%;
    span, div {
        color: ${gray};
        margin-bottom: 0.5rem;
        margin-right: 0.5rem;
    }
`

export const RestaurantLogo = styled.img` 
    border-radius: 0.5rem 0.5rem 0 0;
    margin-bottom: 0.75rem;
    max-height: 7.5rem;
`

export const RestaurantName = styled.p`
    color: ${midGreen};
    margin-bottom: 0.5rem;
`

export const CategoriaTitle = styled.p` 
    margin: 1rem 0 0.5rem 0;
`

export const CategoriaLine = styled.hr` 
    background-color: black;
    height: 1px;
    margin-bottom: 0.5rem;
    width: 100%;
`
