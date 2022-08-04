import React from 'react';

// global style
import { FormContainer, StyledInput } from '../../global/globalStyles';

// style
import { StyledButton } from './styles';

// hooks
import { useForm } from '../../hooks/useForm';

// router
import { useNavigate } from 'react-router-dom';

// request
import { login } from '../../services/user';

const LoginForm = () => {
    const [form, onChange, clear] = useForm({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
    
        login(form, clear, navigate)
      }

    return (
        <FormContainer onSubmit={handleLogin}>
            <StyledInput
                name="email"
                id="email"
                label="E-mail"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                value={form.email}
                onChange={onChange}
            />

            <StyledInput
                name="password"
                id="outlined-adornment-password"
                label="Senha"
                type={"password"}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                value={form.password}
                onChange={onChange}
            />

            <StyledButton
                type="submit"
                fullWidth
                variant="contained"
                margin="normal"
            >
                Entrar
            </StyledButton>

        </FormContainer>
    )
}

export default LoginForm;