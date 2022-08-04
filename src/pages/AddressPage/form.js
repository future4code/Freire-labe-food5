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
import { saveAddress } from '../../services/user';

const AddressForm = () => {
  const [form, onChange, clear] = useForm({
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: ''
  })

  const navigate = useNavigate();

  const handleSaveAddress = (event) => {
    event.preventDefault();

    saveAddress(form, clear, navigate)
  }

  return (
    <FormContainer onSubmit={handleSaveAddress}>
      <StyledInput
        name="street"
        id="street"
        label="Rua"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={form.street}
        onChange={onChange}
      />

      <StyledInput
        name="number"
        id="number"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={form.number}
        onChange={onChange}
      />

      <StyledInput
        name="complement"
        id="complement"
        label="Complemento"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        value={form.complement}
        onChange={onChange}
      />

      <StyledInput
        name="neighbourhood"
        id="neighbourhood"
        label="Bairro"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={form.neighbourhood}
        onChange={onChange}
      />

      <StyledInput
        name="city"
        id="city"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={form.city}
        onChange={onChange}
      />

      <StyledInput
        name="state"
        id="state"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={form.state}
        onChange={onChange}
      />


      <StyledButton
        type="submit"
        fullWidth
        variant="contained"
        margin="normal"
      >
        Salvar
      </StyledButton>

    </FormContainer>
  )
}

export default AddressForm;