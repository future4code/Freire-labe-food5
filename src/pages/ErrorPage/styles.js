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
    justify-content: center;
    align-items: center;
    background-color: #0e0e0e;
`

export const FaceText = styled.h2 `
    color: ${({color}) => color};
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SmileText = styled.h2 `
    color: ${({color}) => color};
    letter-spacing: 2px;
    line-height: 2.5rem;
`

export const StyledButton = styled(Button)`
    margin: 1rem 0 0 !important;
    background-color: ${midGreen} !important;
`