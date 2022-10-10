import axios from 'axios'
import {API_URL} from "../config"

const fetch = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: "Bearer " + localStorage.access_token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'ru,en;q=0.5',
        // 'Access-Control-Allow-Headers' : `*, ${offset}`
    }
})

export default fetch