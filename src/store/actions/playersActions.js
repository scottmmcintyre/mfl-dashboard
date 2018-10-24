import axios from 'axios';
import { LOAD_PLAYERS_FAILURE, LOAD_PLAYERS_SUCCESS, LOAD_PLAYERS_PENDING } from './constants';

export function loadPlayersFailure(error) {
    return {
        type: LOAD_PLAYERS_FAILURE,
        payload: error
    }
}

export function loadPlayersSuccess(players) {
    return {
        type: LOAD_PLAYERS_SUCCESS,
        payload: players
    }
}

export function loadPlayersPending() {
    return {
        type: LOAD_PLAYERS_PENDING
    }
}

export function loadPlayersRequest(cookie) {
    return (dispatch) => {
        //axios.get(`/export?TYPE=myleagues&FRANCHISE_NAMES=1&JSON=1`, {
            axios.get(`http://localhost:4000/export/players/${cookie}`, {
                //withCredentials: true,
                //headers: {
                //    Cookie: `MFL_USER_ID=${cookie}`
                //}
            })
            .then((response) => {
                console.log("players response", response.data);
                dispatch(loadPlayersSuccess(response.data));
            }
            ).catch((error) => {
                dispatch(loadPlayersFailure(error))
            });
    }
}