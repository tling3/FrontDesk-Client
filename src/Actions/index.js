import FrontDesk from '../Apis/FrontDesk';
import {
    GET_SESSIONS,
    GET_SESSION,
    GET_MEMBERS
    // SEARCH_TEXT
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

// export const getSearchText = text => dispatch => {
//     dispatch({ type: SEARCH_TEXT, payload: text });
// }
