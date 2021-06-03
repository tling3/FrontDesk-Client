import { combineReducers } from 'redux';
import SessionsReducer from './SessionsReducer';
import MemberSearchReducer from './MemberSearchReducer';

export default combineReducers({
    sessions: SessionsReducer,
    members: MemberSearchReducer
});
