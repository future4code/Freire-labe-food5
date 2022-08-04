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
import { signUp } from '../../services/user';

const SignupForm = () => {
  const [form, onChange, clear] = useForm({
    name: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();

    const { password, confirmPassword } = form;

    if(password !== confirmPassword) return; 

    signUp(form, clear, navigate)
  }

  return (
    <FormContainer onSubmit={handleSignUp}>
      <StyledInput
        name="name"
        id="name"
        label="Nome"
        type="name"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={form.name}
        onChange={onChange}
      />

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
        name="cpf"
        id="cpf"
        label="CPF"
        type="cpf"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={form.cpf}
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

      <StyledInput
        name="confirmPassword"
        id="outlined-adornment-passord"
        label="Senha"
        type={"password"}
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={form.confirmPassword}
        onChange={onChange}
      />

      <StyledButton
        type="submit"
        fullWidth
        variant="contained"
        margin="normal"
      >
        Criar
      </StyledButton>

    </FormContainer>
  )
}

export default SignupForm;