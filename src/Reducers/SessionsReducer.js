import _ from 'lodash';
import { GET_SESSIONS, GET_SESSION } from '../Actions/Types'
const SessionsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_SESSIONS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case GET_SESSION:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}

export default SessionsReducer;
