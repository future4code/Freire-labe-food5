import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToLogin } from "../router/cordinator"


export const login = (body, clear, navigate) => {

    console.log(body)
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
        })
        .catch((err) => alert("Erro no Login"))
}

export const signUp = (body, clear, navigate) => {
    console.log(body)
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            console.log(res)
            clear()
            goToLogin(navigate)
        })
        .catch((err) => alert("Erro no Login"))
}

export const addAddress = (body, clear, navigate) => {
    
}