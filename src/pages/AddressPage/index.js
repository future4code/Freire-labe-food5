import React from 'react';
import { goToSignUp } from '../../router/cordinator';
import { useNavigate } from 'react-router-dom'
import AddressForm from './form.js';
import { ScreenContainer, StyledButton } from './styled.js';

const AdressPage = () => {
    const navigate = useNavigate()
  
    return (
      <ScreenContainer>
        <StyledButton onClick={() => goToSignUp(navigate)}>Voltar</StyledButton>
        <AddressForm/>
        
      </ScreenContainer>
    )
  }
  
  export default AdressPage;