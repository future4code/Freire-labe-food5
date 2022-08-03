import React from 'react'
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { addAddress } from '../../services/users';
import { InputsContainer, StyledInput, StyledButton } from './styled';

const AdressForm = () => {
    const [form, onChange, clear] = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: "" 
    })
    const navigate = useNavigate()

    const handleOnSubmit = (event) => {
        event.preventDefault()

        addAddress(form, clear, navigate)
    }
    return (
        <InputsContainer>
            <addAdressFormContainer onSubmit={handleOnSubmit}>
                <StyledInput
                    type="text"
                    placeholder='rua'
                    value={form.street}
                    onChange={onChange}
                    name="street"
                />
                <StyledInput
                    type="number"
                    placeholder='numero'
                    value={form.number}
                    onChange={onChange}
                    name="number"
                />
                <StyledInput
                    type="text"
                    placeholder='bairro'
                    value={form.neighbourhood}
                    onChange={onChange}
                    name="neighbourhood"
                />
                <StyledInput
                    type="text"
                    placeholder='cidade'
                    value={form.city}
                    onChange={onChange}
                    name="city"
                />
                <StyledInput
                    type="text"
                    placeholder='estado'
                    value={form.state}
                    onChange={onChange}
                    name="state"
                />
                <StyledInput
                    type="text"
                    placeholder='complemento'
                    value={form.complement}
                    onChange={onChange}
                    name="complement"
                />
                <StyledButton
                    type="submit"
                    >
                        Salvar
                    </StyledButton>
                </addAdressFormContainer>
            </InputsContainer>
    )
}
export default AdressForm;    