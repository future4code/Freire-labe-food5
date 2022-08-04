import styled from "styled-components";

// material ui
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const Container = styled.header `
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 3px #cccccc;
    position: relative;
    margin: 0 0 2rem;
`

export const StyledIcon = styled(ArrowBackIosIcon) `
    position: absolute;
    left: 1.5rem;
    cursor: pointer;
`