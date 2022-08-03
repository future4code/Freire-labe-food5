import React from 'react';
import { goToLogin } from '../../router/cordinator';
import { useNavigate } from 'react-router-dom'
import SignUpForm from './form.js';
import { ScreenContainer, SignUpButtonContainer, StyledButton } from './styles.js';

const SignUpPage = () => {
  const navigate = useNavigate ()

  return (
    <ScreenContainer>
      <p> Future Eats</p>
      <SignUpForm />
      <SignUpButtonContainer>
        <StyledButton
          onClick={() => goToLogin(navigate)}
          fullWidth
          color="secundary"
          variant="contained"
          margin="normal"
        >
          Login
        </StyledButton>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default SignUpPage;