import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const GetRestaurants = (setRestaurants) => {
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}/restaurants`, {
        headers: {
            auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5xaGJpbWR4NGZmQ3BTaElJWElKIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTEzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6InJ1YSBhc3Ryb2RldiwgMTAsIDEgLSBDZW50cm8iLCJpYXQiOjE2NTk0NjAzNDZ9.Rz5O7Ivd635p8ZL3kwV99lNMl3FtpPh0rQLz5L7VOEg'
        }
    }).then(res => {
        setRestaurants(res.data.restaurants)
    }).catch(err => {
        console.log(err)
    })
}

export const restaurantsCategories = ["Árabe", "Asiática", "Hamburguer", "Italiana", "Sorvetes", "Carnes", "Baiana", "Petiscos", "Mexicana"]