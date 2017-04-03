import React, { Component } from 'react'
import Loginbutton from './Loginbutton'

class Loginform extends Component {

    state = {
        uname: '',
        pword:''
    }

    render() {   
        const { dispatch } = this.props    
        
        return (
            <div>
                <form className="form-horizontal" 
                onSubmit={ (e) => {
                    this.setState({
                        uname: this.refs.username.value.trim(),
                        pword: this.refs.password.value.trim()
                    })
                    e.preventDefault()
                } }>
                    <legend>Login</legend>
                    <div className="form-group">
                        <label htmlFor="username" className="col-lg-2 control-label">Username:</label>
                        <div className="col-lg-4">
                            <input type="text" id="username" ref="username" placeholder="insert username" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="col-lg-2 control-label">Password:</label>
                        <div className="col-lg-4">
                            <input type="password" id="password" ref="password" placeholder="insert password" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-lg-10 col-lg-offset-2">
                            <Loginbutton username={this.state.uname} password={this.state.pword} dispatch={dispatch} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Loginform