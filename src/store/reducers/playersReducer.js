import { LOAD_PLAYERS_FAILURE, LOAD_PLAYERS_PENDING, LOAD_PLAYERS_SUCCESS, LOGOUT_USER } from "../actions/constants";

const initialState = {
    allIds: [],
    byId: {},
    playersLoaded: false
}

export default function playersReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_PLAYERS_FAILURE:
            return {
                ...state,
                playersLoaded: false
            }
        case LOAD_PLAYERS_PENDING:
            return {
                ...state,
                playersLoaded: false
            }
        case LOAD_PLAYERS_SUCCESS:
            return {
                ...state,
                allIds: action.payload.allIds,
                byId: action.payload.byId,
                playersLoaded: true
            }
        case LOGOUT_USER:
            return initialState
        default:
            return state
    }
}