import React from "react";
import useForm from "../../hooks/useForm";
import { updateProfile } from "../../services/requisicoes";
import {
  Container,
  Button,
  Input,
  Header,
  ButtonSave,
  Form,
  GlobalStyle,
} from "./styled";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToProfilePage, useProtectedPage } from "../../router/coordinator";
import backPageIcon from "../../assets/img/back-page_icon.svg";
import {  StyledInput } from '../../global/globalStyles';

const EditAddressPage = (props) => {
  const [form, onChange, cleanFields] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });
  const navigate = useNavigate();

  useProtectedPage(navigate)
  const saveUpdate = () => {
    const url = `${BASE_URL}/address`;
    updateProfile(url, form);
    goToProfilePage(navigate);
  };
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Button onClick={() => goToProfilePage(navigate)}>
          <img src={backPageIcon} alt="" />
        </Button>
        <p>Endereço</p>
      </Header>
      <Form onSubmit={saveUpdate}>
        <StyledInput
          id="street"
          label="Rua"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={onChange}
          required
          value={form.street}
        />
        <StyledInput
        name="number"
        id="number"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
          onChange={onChange}
          value={form.number}
          required
        />
        <StyledInput
                name="neighbourhood"
                id="neighbourhood"
                label="Bairro"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
          onChange={onChange}
          value={form.neighbourhood}
          required
        />
        <StyledInput
        name="city"
        id="city"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
          onChange={onChange}
          value={form.city}
          required
        />
        <StyledInput
        name="state"
        id="state"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
          onChange={onChange}
          value={form.state}
          required
        />
        <StyledInput
                name="complement"
                id="complement"
                label="Complemento"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
          onChange={onChange}
          value={form.complement}
        />
        <ButtonSave>
          <strong>Salvar</strong>
        </ButtonSave>
      </Form>
    </Container>
  );
};

export default EditAddressPage;
