import React from 'react'
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { signUp } from '../../services/users';
import { InputsContainer, SignUpFormContainer, StyledInput, StyledButton } from './styles';

const SignUpForm = () => {
    const [form, onChange, clear] = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirmar: '',
    })
    const navigate = useNavigate()

    const handleOnSubmit = (event) => {
        event.preventDefault()

        signUp(form, clear, navigate)
    }

    return (
        <InputsContainer>
            <SignUpFormContainer onSubmit={handleOnSubmit}>
                <StyledInput
                    type="name"
                    placeholder='name'
                    value={form.name}
                    onChange={onChange}
                    name="name"
                />
                <StyledInput
                    type="email"
                    placeholder='E-mail'
                    value={form.email}
                    onChange={onChange}
                    name="email"
                />
                <StyledInput
                    type="text"
                    placeholder='cpf'
                    value={form.cpf}
                    onChange={onChange}
                    name="cpf"
                />
                <StyledInput
                    type="password"
                    placeholder='senha'
                    value={form.password}
                    onChange={onChange}
                    name="password"
                />
                <StyledInput
                    type="password"
                    placeholder='confirmar'
                    value={form.confirmar}
                    onChange={onChange}
                    name="confirmar"
                />
                <StyledButton type='submit'>
                    Criar
                </StyledButton>
            </SignUpFormContainer>
        </InputsContainer>
    )
}

export default SignUpForm

