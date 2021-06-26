import { combineReducers } from 'redux';
import SessionsReducer from './SessionsReducer';
import MemberSearchReducer from './MemberSearchReducer';
import AttendanceReducer from './AttendanceReducer';
import AttendanceDtoReducer from './AttendanceDtoReducer';

export default combineReducers({
    sessions: SessionsReducer,
    members: MemberSearchReducer,
    attendance: AttendanceReducer,
    attendanceDto: AttendanceDtoReducer
});
