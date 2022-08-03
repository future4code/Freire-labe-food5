import { useEffect } from "react"


export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}

export const goToSearch = (navigate) => {
    navigate("../feed/search")
}

export const goBackPage = (navigate) => {
    navigate(-1)
    
export const goToAddAdress = (navigate) => {
    navigate("/endereço")
}

export const useProtectedPage = (navigate) => {

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        if (token === null) {
            console.log('Não está logado!!!')
            goToLogin(navigate)
        }
        
    }, [navigate])
}