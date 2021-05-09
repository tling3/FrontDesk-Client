import FrontDesk from '../Apis/FrontDesk';

const getSessions = () => async dispatch => {
    const response = await FrontDesk.get('/api/session');

    dispatch({ type: 'GET_SESSIONS', payload: response.data })
};

export default getSessions;
