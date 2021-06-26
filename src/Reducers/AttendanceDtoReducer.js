import _ from 'lodash';
import {
    GET_ATTENDANCE_DTO,
    PURGE_ATTENDANCE_DTO
} from '../Actions/Types';

const AttendanceDtoReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ATTENDANCE_DTO:
            return {
                ...state,
                ..._.orderBy(
                    _.mapKeys(action.payload, 'id'),
                    ['firstName', 'lastName', 'id', 'sessionId', 'memberId', 'sessionDate', 'email'],
                    ['asc', 'asc', 'asc', 'asc', 'asc', 'asc', 'asc']
                )
            };
        case PURGE_ATTENDANCE_DTO:
            return {};
        default:
            return state;
    }
}

export default AttendanceDtoReducer;