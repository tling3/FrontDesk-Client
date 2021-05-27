import _ from 'lodash';
import { GET_MEMBERS } from '../Actions/Types';

const MemberSearchReducer = (state = [], action) => {
    switch (action.type) {
        case GET_MEMBERS:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default MemberSearchReducer;
