import React from 'react'
import { LogoutUser } from './actions/actions'

const Logout = ({ dispatch }) => {
    return (
        <li><a style={{ cursor: 'pointer' }} onClick={ () => dispatch(LogoutUser()) }>Logout</a></li>
    )
}

Logout.propTypes = {
    dispatch: React.PropTypes.func.isRequired
}

export default Logout