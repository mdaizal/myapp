export const LOGIN_REQUEST = 'LOGIN_REQUEST',
             LOGIN_SUCCESS = 'LOGIN_SUCCESS',
             LOGIN_FAILED = 'LOGIN_FAILED',
             LOGOUT_REQUEST = 'LOGOUT_REQUEST',
             LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

const requestLogin = (creds) => {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

const successLogin = (user) => {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        username: user.username,
        token: user.token
    }
}

const failedLogin = (errormessage) => {
    return {
        type: LOGIN_FAILED,
        isFetching: false,
        isAuthenticated: false,
        errormessage
    }
}

export const LoginUser = (creds) => {

    let login_url = 'http://localhost:3003/api/login'

    let config = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: creds.username,
            password: creds.password
        })
    }

    return dispatch => {
        dispatch(requestLogin(creds))

        return fetch(login_url, config)
                .then((res) => {
                    return res.json()
                })
                .then((user) => {
                    dispatch(successLogin(user))
                    localStorage.setItem('token', user.token)
                })
                .catch((err) => {
                    dispatch(failedLogin(err))
                })
    }
}

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST,
        isAuthenticated: true,
        isFetching: false
    }
}

const successLogout = () => {
    return {
        type: LOGOUT_SUCCESS,
        isAuthenticated: false,
    }
}

export const LogoutUser = () => {
    return dispatch => {
        dispatch(requestLogout())
        localStorage.removeItem('token')
        dispatch(successLogout())
    }
}