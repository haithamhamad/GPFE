import { SET_USER_NAME, SET_USER_PASS } from './actions';

const initialState = {
    name: '',
    pass: '',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, name: action.payload };
        case SET_USER_PASS:
            return { ...state, pass: action.payload };
        default:
            return state;
    }
}

export default userReducer;