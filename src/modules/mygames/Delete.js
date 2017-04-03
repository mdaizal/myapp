import React, { Component } from 'react'

class Delete extends Component{
    constructor(props){
        super(props)
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(e){
        confirm('Delete? ' + this.props.id)? console.log('DELETED') : console.log('NOPE')
    }

    render(){
        console.log(this.props)
        return <a href="#" className="btn btn-primary btn-xs" onClick={this.handleOnClick}>X</a>
    }
}

export default Delete