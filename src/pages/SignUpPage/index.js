import React from 'react'
import Logo from '../../components/Logo';

// styles
import { Container, PageTitle } from './styles';

// components
import SignupForm from './form';
import Header from '../../components/Header';

// navigate
import { useNavigate } from 'react-router-dom';

// routes
import { goToLogin } from '../../router/coordinator'


const SignupPage = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <Header goTo={() => goToLogin(navigate)}/>
            <Logo/>
            <PageTitle>Cadastro</PageTitle>
            <SignupForm/>
        </Container>
    )
}

export default SignupPage;