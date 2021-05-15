import FrontDesk from '../Apis/FrontDesk';
import {
    GET_SESSIONS,
    GET_SESSION
} from './Types';

export const getSessions = () => async dispatch => {
    const response = await FrontDesk.get('/api/session');

    dispatch({ type: GET_SESSIONS, payload: response.data });
};

export const getSession = id => async dispatch => {
    const response = await FrontDesk.get(`/api/session/${id}`);
    
    dispatch({ type: GET_SESSION, payload: response.data });
}
