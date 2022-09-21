import { GET_INFO_TABLE, GET_INFO_BY_ID } from '../actions/index.js'

const initialState = {
    info: [],
    detail : {},
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
    case GET_INFO_TABLE:
        return {
        ...state,
        info: action.payload,
        };
    case GET_INFO_BY_ID:
        return {
        ...state,
        detail: action.payload[0],
        };
    default:
        return state;
    }
}

export default rootReducer;