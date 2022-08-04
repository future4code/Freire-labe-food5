import { useEffect } from "react";

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}

export const goToAddress = (navigate) => {
    navigate("/endereco")
}

export const goToFeed = (navigate) => {
    navigate("/feed")
}

export const goToSearch = (navigate) => {
    navigate("../feed/search")
}

export const goBackPage = (navigate) => {
    navigate(-1)
}

export const goToRestaurantMenu = (navigate, id) => {
    navigate(`../feed/restaurant/${id}`)
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
export const goToEditAddressPage = (navigate) => {
    navigate("/perfil/editarEndereco")
}

export const goToEditProfilePage = (navigate) => {
    navigate("/perfil/editarPerfil")
}
export const goToProfilePage = (navigate) => {
    navigate("/perfil")
}
