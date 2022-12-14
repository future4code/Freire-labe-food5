import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { goToLogin } from "../router/coordinator"

const useProtectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = JSON.parse(window.localStorage.getItem('token'))
        if(!token) {
            goToLogin(navigate)
        }
    })
}

export default useProtectedPage