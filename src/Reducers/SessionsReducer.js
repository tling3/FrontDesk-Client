const SessionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SESSIONS':
            return action.payload;
        default:
            return state;
    }
}

export default SessionsReducer;
