import styled from "styled-components";

// index
export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`
export const PreLoginPageContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${({left}) => left || 0};
    right: ${({right}) => right || 0};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0e0e0e;
    color: #FFFFFF;
    transition: all 0.6s ease;

`
export const LoginButtonContainer = styled.div`
     width: 100%;
     max-width: 450px;
`

// form
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

`