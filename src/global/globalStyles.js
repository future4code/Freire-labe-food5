import styled, { createGlobalStyle } from 'styled-components';

// material ui
import { TextField } from '@material-ui/core';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body, html {
    width: 100%;
    height: 100vh;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const FormContainer = styled.form`
  width: 90%;
  max-width: 450px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledInput = styled(TextField)`
  
`