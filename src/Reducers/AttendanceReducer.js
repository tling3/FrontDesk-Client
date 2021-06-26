import {
    INSERT_ATTENDANCE
} from '../Actions/Types';

const AttendanceReducer = (state = [], action) => {
    switch (action.type) {
        case INSERT_ATTENDANCE:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}

export default AttendanceReducer;
