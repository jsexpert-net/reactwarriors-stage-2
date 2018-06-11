import React, { Component } from "react";

class StepBasic extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            name="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            name="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            type="password"
            className="form-control"
            id="repeatPassword"
            placeholder="Enter repeat password"
            name="repeatPassword"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default StepBasic;
