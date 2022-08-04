import styled from "styled-components";

export const LogoContainer = styled.div `
    width: auto;
    height: auto;
    font-size: 16px;

    h2 {
        font-size: 3rem;
    }
`

export const FutureText = styled.h2 `
    color: ${({color}) => color};
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 2.5rem;
`

export const EatsText = styled.h2 `
    color: ${({color}) => color};
    letter-spacing: 2px;
    line-height: 2.5rem;
`