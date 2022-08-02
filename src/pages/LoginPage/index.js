import React, { useEffect, useState } from 'react';
import LoginForm from './form';
import { PreLoginPageContainer, ScreenContainer } from './styles.js';


const LoginPage = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setLeft("-100rem")
      setRight("300rem")
    }, 3000)
  }, [left, right])

  return (
    <ScreenContainer>
      <PreLoginPageContainer left={left} right={right}>
        Teste
      </PreLoginPageContainer>
      <LoginForm>
        LoginPage
      </LoginForm>
    </ScreenContainer>




  )
}

export default LoginPage;