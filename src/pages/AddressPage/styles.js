import styled from "styled-components";

// material ui
import Button from '@material-ui/core/Button';

// constants
import { midGreen } from '../../constants/colors'

export const Container = styled.div `
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding: 0 0 2rem;
`

export const PageTitle = styled.h1 `
    margin: 1rem 0;
    font-size: 1.2rem;
    font-weight: 500;
`

export const StyledButton = styled(Button)`
    margin: 1rem 0 0 !important;
    background-color: ${midGreen} !important;
`