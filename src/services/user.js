import axios from "axios"

// constants
import { BASE_URL } from "../constants/urls";

// routes
import { goToAddress, goToFeed } from "../router/coordinator";

const token = window.localStorage.getItem("token")

const headers = {
    headers: {
        auth: token
    }
}

export const login = (body, clear, navigate) => {

    console.log(body)
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", JSON.stringify(res.data.token))
            clear()
            goToFeed(navigate)
        })
        .catch((err) => alert("Email ou senha inválidos!"))
}

export const signUp = (body, clear, navigate) => {
    console.log(body)
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", JSON.stringify(res.data.token))
            console.log(res)
            clear()
            goToAddress(navigate)
        })
        .catch((err) => alert("Erro ao se cadastrar!"))
}

export const saveAddress = (body, clear, navigate) => {
    axios.put(`${BASE_URL}/address`, body, headers)
        .then((res) => {
            localStorage.setItem("token", JSON.stringify(res.data.token))
            clear()
            goToFeed(navigate)
        })
        .catch((err) => alert("Erro ao cadastrar o endereço!"))
}