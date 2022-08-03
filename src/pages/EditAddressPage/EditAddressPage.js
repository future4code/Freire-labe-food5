import React from "react";
import useForm from "../../hooks/useForm";
import { updateProfile } from "../../services/requisicoes";

export const EditAddressPage = (props) => {
    const {form, onChange, cleanFields} = useForm({street: "", number: "", neighbourhood: "", city: '', state: '', complement: ''})

    const saveUpdate = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/address'
        updateProfile(url, form, props.getData)
        //navigate voltando para pagina de perfil

    }
    return(
        <div>
            <button>voltar</button>
            <form onSubmit={saveUpdate}>
                <input type="text" onChange={onChange} name = 'street' value = {form.street} required placeholder="Rua"/>
                <input type="number" onChange={onChange} name = 'number' value = {form.number} required placeholder="Número"/>
                <input type= "text" onChange={onChange} name = 'neighbourhood' value = {form.neighbourhood} required placeholder="Bairro" />
                <input type= "text" onChange={onChange} name = 'city' value = {form.city} required placeholder="Cidade" />
                <input type= "text" onChange={onChange} name = 'state' value = {form.state} required placeholder="Estado" />
                <input type= "text" onChange={onChange} name = 'complement' value = {form.complement}  placeholder="Complemento" />
                <button>Salvar</button>
            </form>
        </div>
    )

}