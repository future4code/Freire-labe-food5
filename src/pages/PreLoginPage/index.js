import React, { useEffect } from 'react'
import { PreLoginPageContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../../router/cordinator';

const PreLoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        goToLogin(navigate)
      }, 3000)  
      
    },[navigate])

    return (
        <PreLoginPageContainer>PreLoginPage</PreLoginPageContainer>
    )
}

export default PreLoginPage