import FrontDesk from '../Apis/FrontDesk';
import {
    GET_SESSIONS,
    GET_SESSION,
    GET_MEMBERS,
    GET_ATTENDANCE,
    PURGE_ATTENDANCE
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

export const getAttendance = (sessionId, date) => async dispatch => {
    const response = await FrontDesk.get(`/api/attendance/session/${sessionId}/${date}`);
    dispatch({ type: GET_ATTENDANCE, payload: response.data });
};

export const purgeAttendance = () => async dispatch => {
    dispatch({ type: PURGE_ATTENDANCE });
}
