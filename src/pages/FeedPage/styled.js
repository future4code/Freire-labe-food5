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
    display: flex;
    height: 2.75rem;
    justify-content: center;
    font-size: 1rem;
    width: 100%;
`

export const MainContainer = styled.main` 
    padding: 0.5rem 1rem 49px 1rem;
    width: 100%;
`

export const SearchContainer = styled.div` 
    align-items: center;
    border: 1px solid ${gray};
    display: flex;
    padding: 1rem;
    width: 100%;
`

export const InputStyled = styled.input` 
    border: none;
    font-size: 1rem;
    height: 100%;
    margin-left: 1rem;
    width: 100%;
    &:focus, &:active {
        outline: none;
    }
`

export const CategoriasContainer = styled.ul`
    align-items: center;
    display: flex;
    margin-top: 0.5rem;
    min-height: 2.625rem;
    width: 100%;
`

export const CategoriaLi = styled.li`
    margin: 0 0.25rem;
    padding: 0 1rem;
    font-size: 1rem;
    text-align: center;
    &:hover, &:active {
        color: ${midGreen};
        cursor: pointer;
    }
`