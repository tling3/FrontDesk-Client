import _ from 'lodash';
import {
    GET_ATTENDANCE,
    PURGE_ATTENDANCE
} from '../Actions/Types';

const AttendanceReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ATTENDANCE:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case PURGE_ATTENDANCE:
            return {};
        default:
            return state;
    }
}

export default AttendanceReducer;
