import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const GetRestaurants = (setRestaurants) => {
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}/restaurants`, {
        headers: {
            auth: token
        }
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}