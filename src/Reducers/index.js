import { combineReducers } from 'redux';
import SessionsReducer from './SessionsReducer';
import MemberSearchReducer from './MemberSearchReducer';
import AttendanceReducer from './AttendanceReducer';

export default combineReducers({
    sessions: SessionsReducer,
    members: MemberSearchReducer,
    attendance: AttendanceReducer
});
