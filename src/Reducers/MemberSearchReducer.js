import _ from 'lodash';
import { GET_MEMBERS } from '../Actions/Types';

const MemberSearchReducer = (state = [], action) => {
    switch (action.type) {
        case GET_MEMBERS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}

export default MemberSearchReducer;
