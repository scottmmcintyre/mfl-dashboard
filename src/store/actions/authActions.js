import axios from 'axios';
import { LOGIN_PENDING, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_USER } from './constants';
import { deleteState } from '../../components/utils/StateLoader';

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export function loginSuccess(cookie) {
    return {
        type: LOGIN_SUCCESS,
        payload: cookie
    }
}

export function loginPending() {
    return {
        type: LOGIN_PENDING
    }
}

export function loginRequest(credentials) {
    return (dispatch) => {
        axios.get(`/login?USERNAME=${credentials.username}&PASSWORD=${credentials.password}&XML=1`)
            .then((response) => {
                var convert = require('xml-js');
                let res = convert.xml2js(response.data, {compact: true});
                let cookie = res.status._attributes.MFL_USER_ID;
                dispatch(loginSuccess(cookie));
            }
            ).catch((error) => {
                dispatch(loginFailure(error))
            });
    }
}

export function logoutUser() {
    deleteState();
    return {
        type: LOGOUT_USER
    }
} 