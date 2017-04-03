import React, { Component } from 'react'
import NewGame from './NewGame'
import GameList from './GameList'

class Main extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-7">
            <legend>List of available games</legend>
            <GameList />
        </div>
        <div className="col-lg-5">
            <NewGame />
        </div>
      </div>
    );
  }
}

export default Main;
