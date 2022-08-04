import React from "react";
import useForm from "../../hooks/useForm";
import { updateProfile } from "../../services/requisicoes";

export const EditProfilePage = (props) => {
    const {form, onChange, cleanFields} = useForm({name: "", email: "", cpf: ""})

    const saveUpdate = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/profile'
        updateProfile(url, form, props.getData)
        //navigate voltando para pagina de perfil

    }
    return(
        <div>
            <button>voltar</button>
            <form onSubmit={saveUpdate}>
                <input type="text" onChange={onChange} name = 'name' value = {form.name} required placeholder="Nome"/>
                <input type="email" onChange={onChange} name = 'email' value = {form.email} required placeholder="E-mail"/>
                <input type= "number" onChange={onChange} name = 'cpf' value = {form.cpf} required placeholder="CPF" />
                <button>Salvar</button>
            </form>
        </div>
    )

}