import { useEffect } from "react"


export const goToLogin = (navigate) => {
    navigate("/")
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
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