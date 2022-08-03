import styled from "styled-components";
import { secundaryColor } from "../../constants/colors";

// index
export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    
`

export const LoginButtonContainer = styled.div`
     width: 100%;
     max-width: 450px;
     
`     
export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    align-items: center;
    margin: 3rem 0 20px;
`
export const LoginFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    margin-bottom: 20px;
`

export const StyledInput = styled.input `

`

// common
export const StyledButton = styled.button `
    background-color: ${secundaryColor};

`