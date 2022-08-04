import React from 'react'

// contants
import { black, white, midGreen } from '../../constants/colors';

// styles
import { LogoContainer, FutureText, EatsText } from './styles';

const Logo = () => {

    const route = window.location.pathname;

    return (
        <LogoContainer>
            <FutureText 
                color={route !== "/" ? black : white} 
            >
                Future
            </FutureText>
            <EatsText 
                color={midGreen} 
            >
                Eats
            </EatsText>
        </LogoContainer>
    )
}

export default Logo;