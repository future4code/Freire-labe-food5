import React from "react";
import useForm from "../../hooks/useForm";
import { updateProfile } from "../../services/requisicoes";
import {Container, Button, Input, Header, ButtonSave, Form, GlobalStyle } from './styled'
import { BASE_URL } from "../../constants/urls";
import {useNavigate} from 'react-router-dom'
import { goToProfilePage } from "../../router/coordinator";
import backPageIcon from '../../assets/img/back-page_icon.svg'

const EditAddressPage = (props) => {
    const [form, onChange, cleanFields] = useForm({street: "", number: "", neighbourhood: "", city: '', state: '', complement: ''})
    const navigate = useNavigate()
    const saveUpdate = () => {
        const url = `${BASE_URL}/address`
        updateProfile(url, form)
        goToProfilePage(navigate)

    }
    return(
        <Container>
            <GlobalStyle />
            <Header>
                <Button onClick = {() => goToProfilePage(navigate)}><img src={backPageIcon} alt="" /></Button>
                <p>Endereço</p>
            </Header>
            <Form onSubmit={saveUpdate}>
                <Input type="text" onChange={onChange} name = 'street' value = {form.street} required placeholder="Rua"/>
                <Input type="number" onChange={onChange} name = 'number' value = {form.number} required placeholder="Número"/>
                <Input type= "text" onChange={onChange} name = 'neighbourhood' value = {form.neighbourhood} required placeholder="Bairro" />
                <Input type= "text" onChange={onChange} name = 'city' value = {form.city} required placeholder="Cidade" />
                <Input type= "text" onChange={onChange} name = 'state' value = {form.state} required placeholder="Estado" />
                <Input type= "text" onChange={onChange} name = 'complement' value = {form.complement}  placeholder="Complemento" />
                <ButtonSave><strong>Salvar</strong></ButtonSave>
            </Form>
        </Container>
    )

}

export default EditAddressPage