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
import { goToProfilePage } from "../../router/coordinator";
import backPageIcon from "../../assets/img/back-page_icon.svg";
import { StyledInput } from "../../global/globalStyles";

const EditProfilePage = (props) => {
  const [form, onChange, cleanFields] = useForm({
    name: "",
    email: "",
    cpf: "",
  });
  const navigate = useNavigate();
  const saveUpdate = () => {
    const url = `${BASE_URL}/profile`;
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
        <p>Editar </p>
      </Header>
      <Form onSubmit={saveUpdate}>
        <StyledInput
          name="name"
          id="name"
          label="Nome"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={onChange}
          value={form.name}
          required
        />
        <StyledInput
          name="email"
          id="email"
          label="E-mail"
          type="email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={onChange}
          value={form.email}
        />
        <StyledInput
          name="cpf"
          id="cpf"
          label="CPF"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          onChange={onChange}
          value={form.cpf}
        />
        <ButtonSave>
          <strong>Salvar</strong>
        </ButtonSave>
      </Form>
    </Container>
  );
};
export default EditProfilePage;
