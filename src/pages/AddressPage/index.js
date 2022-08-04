import React from 'react';

// styles
import { Container, PageTitle } from './styles';

// components
import SignupForm from './form';
import Header from '../../components/Header';

// navigate
import { useNavigate } from 'react-router-dom';

// routes
import { goToSignUp, useProtectedPage } from '../../router/coordinator'


const AddressPage = () => {
   
    const navigate = useNavigate();
    useProtectedPage(navigate);
    return (
        <Container>
            <Header goTo={() => goToSignUp(navigate)}/>
            <PageTitle>Meu Endereço</PageTitle>
            <SignupForm/>
        </Container>
    )
}

export default AddressPage;