import React from 'react'
import Loginform from './logins/Loginform'
import Main from './main'
import { connect } from 'react-redux'

class App extends React.Component {

    render() {
        const { isAuthenticated, dispatch } = this.props
        return (
            <div>
            { !isAuthenticated &&
                <Loginform dispatch={dispatch} />
            }

            { isAuthenticated &&
                <Main dispatch={dispatch} />
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(App)