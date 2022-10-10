import {store} from "../store"
import axios from 'axios'
import {LOGIN} from "../constants/actionTypes";
import {API_URL} from "../config";

import { useNavigate  } from 'react-router-dom'

export default async function ({email, password, remember}){

    let data = new FormData()
    data.append('username', email)
    data.append('password', password)
    data.append('client_id', '4')
    data.append('client_secret', 'aoRji0KUCaYSRES9AMOE6w2Rh7rpeViVNaRYiVRC')
    data.append('grant_type', 'password')
    console.log(API_URL);
    let config = {
        method: 'post',
        url: `${API_URL}oauth/token`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        xhrFields: {withCredentials: true},
        data: data
    }


    await axios(config)
        .then(async function (response) {

            localStorage.access_token = await response.data.access_token
            // setTimeout(() => {
                window.location.href = '/dashboard'
            // }, 400)

        })
        .catch(function (error) {
            console.log(JSON.stringify(error.response))
        })
}