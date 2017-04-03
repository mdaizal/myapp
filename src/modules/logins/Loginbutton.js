import React, { Component } from 'react'
import { LoginUser } from '../actions/actions'

const handleClick = (uname, pword, dispatch) => {
    if(!uname || !pword) {
        return
    } else {
        const creds = {username: uname, password: pword}
        dispatch(LoginUser(creds))
    }
}

class Loginbutton extends Component { 

    render() {
        const { username, password, dispatch } = this.props

        return (
            <div>
                <button type="submit" className="btn btn-primary" onClick={handleClick(username, password, dispatch)}>Login</button>
            </div>
        )
    }
}

export default Loginbutton