import { LOAD_LEAGUES_FAILURE, LOAD_LEAGUES_PENDING, LOAD_LEAGUES_SUCCESS, LOAD_ROSTER_SUCCESS, LOAD_STANDINGS_SUCCESS, LOGOUT_USER } from "../actions/constants";

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
        case LOAD_STANDINGS_SUCCESS:
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.league_id]: {
                        ...state.byId[action.payload.league_id],
                        record: action.payload.record,
                        points_for: action.payload.points_for,
                        points_against: action.payload.points_against,
                        all_play_record: action.payload.all_play_record
                    }
                }
            }
        case LOGOUT_USER:
            return initialState
        default:
            return state
    }
}