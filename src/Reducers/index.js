import { combineReducers } from 'redux';
import SessionsReducer from './SessionsReducer'

export default combineReducers({
    sessions: SessionsReducer
});
