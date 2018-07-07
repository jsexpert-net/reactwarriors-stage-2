import React, { Component } from "react";

class StepBasic extends Component {
  render() {
    const {
      values: { firstname, lastname, password, repeatPassword, gender },
      onChangeField
    } = this.props;
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Enter firstname"
            name="firstname"
            value={firstname}
            onChange={onChangeField}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Enter lastname"
            name="lastname"
            value={lastname}
            onChange={onChangeField}
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
            value={password}
            onChange={onChangeField}
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
            value={repeatPassword}
            onChange={onChangeField}
          />
        </div>
        <fieldset className="form-group">
          <div>Gender</div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={gender === "male"}
              onChange={onChangeField}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={gender === "female"}
              onChange={onChangeField}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </fieldset>
      </React.Fragment>
    );
  }
}

export default StepBasic;
