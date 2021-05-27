import { combineReducers } from 'redux';
import SessionsReducer from './SessionsReducer'
import MemberSearchReducer from './MemberSearchReducer';
import SearchTextReducer from './SearchTextReducer';

export default combineReducers({
    sessions: SessionsReducer,
    members: MemberSearchReducer,
    searchText: SearchTextReducer
});
