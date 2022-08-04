import React, { useEffect } from 'react';

// styles
import { Container } from './styles.js';

// router
import { useNavigate } from 'react-router-dom';
import { goToLogin } from '../../router/coordinator.js';

// component
import Logo from '../../components/Logo/index.js';

const PreLoginPage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      goToLogin(navigate)
    }, 3000)
  }, [navigate])

  return (
    <Container>
      <Logo/>
    </Container>
  )
}

export default PreLoginPage;