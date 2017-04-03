import React, { Component } from 'react'

class NewGame extends Component {
  render() {
    return (
      <div>
        <form className="form-horizontal">
        <legend>Add new game</legend>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameTitle" className="col-lg-2 control-label">Title:</label>
                    <div className="col-lg-10">
                        <input type="text" id="gameTitle" placeholder="Game title" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="gameDesc" className="col-lg-2 control-label">Description:</label>
                    <div className="col-lg-10">
                        <textarea className="form-control" rows="3" id="gameDesc"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="platform" className="col-lg-2 control-label">Platform:</label>
                    <div className="col-lg-10">
                        <input type="text" id="platform" placeholder="Platform: PC, PS3, PS4, Steam, Nintendo.." className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-default">Cancel</button>&nbsp;&nbsp;
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </fieldset>
        </form>
      </div>
    );
  }
}

export default NewGame;