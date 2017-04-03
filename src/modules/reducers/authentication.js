import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../actions/actions'

const initial = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('token')? true : false
}

export const Authentication = (state = initial, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            })
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
            })
        case LOGIN_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errormessage: action.errormessage
            })
        case LOGOUT_REQUEST:
            return Object.assign({}, state, {
                isAuthenticated: true,
                isFetching: false
            })
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: false,
                isFetching: false
            })
        default:
            return state
    }
}