import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { goToFeed } from "../router/coordinator"

const useUnprotectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = JSON.parse(window.localStorage.getItem('token'))
        if(token) {
            goToFeed(navigate)
        }
    })
}

export default useUnprotectedPage