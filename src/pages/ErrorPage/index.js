import React from 'react'

// costants
import { white, midGreen } from '../../constants/colors';

// styles
import { Container, FaceText, SmileText, StyledButton } from './styles'

// navigate
import { useNavigate } from 'react-router-dom';
import { goToLogin } from '../../router/coordinator';

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <FaceText color={white}>
                Página não existente :
                <SmileText color={midGreen} >(</SmileText>
            </FaceText>

            <StyledButton onClick={() => goToLogin(navigate) }>Ir para o Login</StyledButton>
        </Container>
    )
}

export default ErrorPage;