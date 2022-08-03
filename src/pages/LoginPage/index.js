import React from 'react';
import LoginForm from './form';
import { ScreenContainer, StyledButton } from './styles.js';
import { goToSignUp } from '../../router/cordinator'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <ScreenContainer>
      LoginPage
      <LoginForm />
      <StyledButton onClick={() => goToSignUp(navigate)}>
        Se cadastre!
      </StyledButton>
    </ScreenContainer>




  )
}

export default LoginPage;