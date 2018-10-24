import axios from 'axios';
import { LOAD_LEAGUES_FAILURE, LOAD_LEAGUES_SUCCESS, LOAD_LEAGUES_PENDING, LOAD_ROSTER_PENDING, LOAD_ROSTER_SUCCESS, LOAD_ROSTER_FAILURE } from './constants';

export function loadLeaguesFailure(error) {
    return {
        type: LOAD_LEAGUES_FAILURE,
        payload: error
    }
}

export function loadLeaguesSuccess(leagues) {
    return {
        type: LOAD_LEAGUES_SUCCESS,
        payload: leagues
    }
}

export function loadLeaguesPending() {
    return {
        type: LOAD_LEAGUES_PENDING
    }
}

export function loadRosterFailure(error) {
    return {
        type: LOAD_ROSTER_FAILURE,
        payload: error
    }
}

export function loadRosterSuccess(roster) {
    return {
        type: LOAD_ROSTER_SUCCESS,
        payload: roster
    }
}

export function loadRosterPending() {
    return {
        type: LOAD_ROSTER_PENDING
    }
}

export function loadLeaguesRequest(cookie) {
    return (dispatch) => {
        //axios.get(`/export?TYPE=myleagues&FRANCHISE_NAMES=1&JSON=1`, {
            axios.get(`http://localhost:4000/export/myleagues/${cookie}`, {
                //withCredentials: true,
                //headers: {
                //    Cookie: `MFL_USER_ID=${cookie}`
                //}
            })
            .then((response) => {
                dispatch(loadLeaguesSuccess(response.data));
            })
            .catch((error) => {
                dispatch(loadLeaguesFailure(error))
            });
    }
}

export function loadRosterRequest(cookie, league_id, franchise_id) {
    return (dispatch) => {
        axios.get(`http://localhost:4000/export/rosters/${cookie}/league/${league_id}/franchise/${franchise_id}`)
            .then((response) => {
                dispatch(loadRosterSuccess(response.data));
            })
            .catch((error) => {
                dispatch(loadRosterFailure(error))
            });
    }
}