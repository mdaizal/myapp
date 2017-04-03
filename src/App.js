import React, { Component } from 'react'
import ModuleIndex from './modules'

class App extends Component {

  render() {
    
    return (
      <div>
        <div className="page-header">
          <h1>My Apps</h1>
          <p>Games, Todos, Codes ... etc</p>
        </div>  
        <div className="col-lg-12">
            <ModuleIndex  />
        </div>
      </div>
    );
  }
}

export default App;
