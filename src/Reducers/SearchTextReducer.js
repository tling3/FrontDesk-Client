import { SEARCH_TEXT } from '../Actions/Types';

const SearchTextReducer = (state = "", action) => {
    switch (action.type) {
        case SEARCH_TEXT:
            return action.payload
        default:
            return state;
    }
}

export default SearchTextReducer;