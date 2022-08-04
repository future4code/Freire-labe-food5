import React from 'react'
import Logo from '../../components/Logo';

// styles
import { Container, StyledLink, PageTitle } from './styles';

// components
import LoginForm from './form';

// navigate
import { useNavigate } from 'react-router-dom';

// routes
import { goToSignUp } from '../../router/coordinator'

const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <Logo/>
            <PageTitle>Login</PageTitle>
            <LoginForm/>
            <StyledLink onClick={() => goToSignUp(navigate)}>Não possui cadastro? Clique aqui.</StyledLink>
        </Container>
    )
}

export default LoginPage;