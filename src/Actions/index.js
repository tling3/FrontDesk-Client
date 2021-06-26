import history from '../History';
import FrontDesk from '../Apis/FrontDesk';
import {
    GET_SESSIONS,
    GET_SESSION,
    GET_MEMBERS,
    PURGE_ATTENDANCE_DTO,
    INSERT_ATTENDANCE,
    GET_ATTENDANCE_DTO
} from './Types';

export const getSessions = () => async dispatch => {
    const response = await FrontDesk.get('/api/session');
    dispatch({ type: GET_SESSIONS, payload: response.data });
};

export const getSession = id => async dispatch => {
    const response = await FrontDesk.get(`/api/session/${id}`);
    dispatch({ type: GET_SESSION, payload: response.data });
}

export const getMembers = () => async dispatch => {
    const response = await FrontDesk.get('/api/member');
    dispatch({ type: GET_MEMBERS, payload: response.data });
}

export const getAttendanceDto = (sessionId, date) => async dispatch => {
    const response = await FrontDesk.get(`/api/attendance/session/${sessionId}/${date}`);
    dispatch({ type: GET_ATTENDANCE_DTO, payload: response.data });
};

export const purgeAttendanceDto = () => async dispatch => {
    dispatch({ type: PURGE_ATTENDANCE_DTO });
}

export const insertAttendance = (memberId, sessionId, date) => async dispatch => {
    var body = {
        sessionId: sessionId,
        memberId: memberId,
        sessionDate: date,
        modifiedBy: "TL"
    }
    const response = await FrontDesk.post("/api/attendance", body);
    dispatch({ type: INSERT_ATTENDANCE, payload: response.data });
    history.push(`/session/members/${sessionId}`);
}
