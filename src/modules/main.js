import React from 'react'
import Logout from './logout'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Home = () => (
    <h3>Welcome!</h3>
)

const PageOne = () => (
    <h3>Page One</h3>
)

const PageTwo = () => (
    <h3>Page Two</h3>
)

const PageThree = () => (
    <h3>Page Three</h3>
)

class Main extends React.Component {
    render() {
        const { dispatch } = this.props
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="navbar-header">
                            <a className="navbar-brand">MYAPPS</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/pageone">Page One</Link></li>
                                <li><Link to="/pagetwo">Page Two</Link></li>
                                <li><Link to="/pagethree">Page Three</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <Logout dispatch={dispatch} />
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route path="/pageone" component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                    <Route path="/pagethree" component={PageThree} />
                </div>
            </Router>
        )
    }
}

export default Main