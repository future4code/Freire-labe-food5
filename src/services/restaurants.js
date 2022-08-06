import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const GetRestaurants = (setRestaurants) => {
    const token = JSON.parse(localStorage.getItem('token'))
    axios.get(`${BASE_URL}/restaurants`, {
        headers: {
            auth: token
        }
    }).then(res => {
        setRestaurants(res.data.restaurants)
    }).catch(err => {
        console.log(err)
    })
}

export const GetRestaurantDetail = (id, setRestaurant) => {
    const token = JSON.parse(localStorage.getItem('token'))
    axios.get(`${BASE_URL}/restaurants/${id}`, {
        headers: {
            auth: token
        }
    })
    .then(res => {
        setRestaurant(res.data.restaurant)
    })
    .catch(err => {
        console.log(err)
    })
}

export const restaurantsCategories = ["Todas", "Árabe", "Asiática", "Hamburguer", "Italiana", "Sorvetes", "Carnes", "Baiana", "Petiscos", "Mexicana"]