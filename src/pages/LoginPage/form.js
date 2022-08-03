import React from 'react'
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { login } from '../../services/users';
import { InputsContainer, LoginFormContainer, StyledInput, StyledButton } from './styles';


const LoginForm = () => {
    const [form, onChange, clear] = useForm({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleOnSubmit = (event) => {
        event.preventDefault()

        login(form, clear, navigate)
    }
    return (
        <InputsContainer>
            <LoginFormContainer onSubmit={handleOnSubmit}>
                <StyledInput 
                    type="email" 
                    placeholder='e-mail'
                    value={form.email}
                    onChange={onChange}
                />
                <StyledInput 
                    type="password" 
                    placeholder='senha'
                    value={form.password}
                    onChange={onChange}
                />

                <StyledButton type='submit'>
                    Logar
                </StyledButton>
            </LoginFormContainer>
        </InputsContainer>
    )
}

export default LoginForm