import { LOAD_LEAGUES_FAILURE, LOAD_LEAGUES_PENDING, LOAD_LEAGUES_SUCCESS, LOAD_ROSTER_SUCCESS, LOGOUT_USER } from "../actions/constants";

const initialState = {
    byId: {},
    allIds: [],
    leaguesLoaded: false,
}

export default function leaguesReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_LEAGUES_FAILURE:
            return {
                ...state,
                leaguesLoaded: false
            }
        case LOAD_LEAGUES_PENDING:
            return {
                ...state,
                leaguesLoaded: false
            }
        case LOAD_LEAGUES_SUCCESS:
            return {
                ...state,
                byId: action.payload.byId,
                allIds: action.payload.allIds,
                leaguesLoaded: true
            }
        case LOAD_ROSTER_SUCCESS:
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.league_id]: {
                        ...state.byId[action.payload.league_id],
                        roster: action.payload.roster
                    }
                }
            }
        case LOGOUT_USER:
            return initialState
        default:
            return state
    }
}