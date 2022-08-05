import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Roboto', sans-serif;
    }
    
`

export const Container = styled.div`
    display: grid;
    grid-template-rows: 60px 1fr;

`

export const Button = styled.button`
    margin-left: 16px;
    background-color: transparent;
    border: none;
`
export const Input = styled.input`
    width: 80%;
    height: 56px;
    padding-left: 10px;
    border-radius: 4px;
    border: solid 1px #b8b8b8;
`
export const Header = styled.div`
    display: flex;
   /* justify-content: center; */
    align-items: center;
    border-bottom: 1px solid lightgray;
    box-shadow: 0 0.5px 0 0 black;
    background-color: #fff;
    p {
        margin-left: 25%;
        font-size: 20px;
        
    }
`
export const ButtonSave = styled.button`
    width: 100%;
    height: 42px;
    background-color: #5cb646;
    padding: 12px 16px;
    border-radius: 2px;
    border: none;
`
export const Form= styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    margin: auto;
    width: 90%;
`