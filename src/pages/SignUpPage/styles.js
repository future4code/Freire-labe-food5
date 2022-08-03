import styled from "styled-components";
import {secundaryColor} from '../../constants/colors'

export const SignUpPageContainer = styled.div `

`

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    

    hr {
    margin: 15px 0 0;
}
`


export const SignUpButtonContainer = styled.div`
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

export const SignUpFormContainer = styled.form`
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
    border-radius: 20px !important;
    background-color: ${secundaryColor};

`