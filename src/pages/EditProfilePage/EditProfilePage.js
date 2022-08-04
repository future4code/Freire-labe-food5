import React from "react";
import useForm from "../../hooks/useForm";
import { updateProfile } from "../../services/requisicoes";
import {Container, Button, Input, Header, ButtonSave, Form, GlobalStyle } from './styled'
import { BASE_URL } from "../../constants/urls";
import {useNavigate} from 'react-router-dom'
import { goToProfilePage } from "../../router/cordinator";
import backPageIcon from '../../assets/img/back-page_icon.svg'

const EditProfilePage = (props) => {
    const [form, onChange, cleanFields] = useForm({name: "", email: "", cpf: ""})
    const navigate = useNavigate()
    const saveUpdate = () => {
        const url = `${BASE_URL}/profile`
        updateProfile(url, form)
        goToProfilePage(navigate)

    }
    return(
        <Container>
            <GlobalStyle />
            <Header>
                <Button onClick={() => goToProfilePage(navigate)}><img src={backPageIcon} alt="" /></Button>
                <p>Editar </p>
            </Header>
            <Form onSubmit={saveUpdate}>
                <Input type="text" onChange={onChange} name = 'name' value = {form.name} required placeholder="Nome"/>
                <Input type="email" onChange={onChange} name = 'email' value = {form.email} required placeholder="E-mail"/>
                <Input type= "text" onChange={onChange} name = 'cpf' value = {form.cpf} required placeholder="CPF" />
                <ButtonSave><strong>Salvar</strong></ButtonSave>
            </Form>
        </Container>
    )

}
export default EditProfilePage