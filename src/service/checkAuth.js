import {store} from "../store";
import axios from "../units/axios";
import {LOGIN} from "../constants/actionTypes";

export default async function checkAuth(props) {
    if (window.location.pathname === '/') {
        window.location.href = '/dashboard'
    }
    if (window.location.pathname === '/login') {
        return true
    }

    if (store.getState()['auth']['authorized']) {
        return true
    } else {
        try {
            const response = await axios.get('userinfo')
            if (response.status) {
                console.log(321)
                store.dispatch({ type: LOGIN })
                return true
            } else {
                window.location.href = '/login'
            }
        } catch {
            window.location.href = '/login'
        }
    }
}