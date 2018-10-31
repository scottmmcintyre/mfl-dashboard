import { LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESS, LOGOUT_USER } from "../actions/constants";

const initialState = {
    cookie: '',
    loginPending: false,
    loginSuccess: false,
    loginError: false
}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_FAILURE:
            return {
                ...state,
                loginError: true,
                loginPending: false
            }
        case LOGIN_PENDING:
            return {
                ...state,
                loginPending: true,
                loginError: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                cookie: action.payload,
                loginSuccess: true,
                loginPending: false
            }
        case LOGOUT_USER:
            return initialState
        default:
            return state
    }
}