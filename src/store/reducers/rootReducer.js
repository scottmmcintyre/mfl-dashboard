import { combineReducers } from 'redux';

import authReducer from "./authReducer";
import leaguesReducer from "./leaguesReducer";
import playersReducer from "./playersReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    leagues: leaguesReducer,
    players: playersReducer
})

export default rootReducer;
