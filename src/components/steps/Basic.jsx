import React, { Component } from "react";
import classNames from "classnames";

class StepBasic extends Component {
  getClassNameField = name => {
    return classNames("form-control", {
      invalid: this.props.errors[name]
    });
  };
  render() {
    const {
      values: { firstname, lastname, password, repeatPassword, gender },
      errors,
      onChangeField
    } = this.props;

    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            className={this.getClassNameField("firstname")}
            id="firstname"
            placeholder="Enter firstname"
            name="firstname"
            value={firstname}
            onChange={onChangeField}
          />
          {errors.firstname && (
            <div className="invalid-feedback">{errors.firstname}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            className={this.getClassNameField("lastname")}
            id="lastname"
            placeholder="Enter lastname"
            name="lastname"
            value={lastname}
            onChange={onChangeField}
          />
          {errors.lastname && (
            <div className="invalid-feedback">{errors.lastname}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={this.getClassNameField("password")}
            id="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={onChangeField}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            type="password"
            className={this.getClassNameField("repeatPassword")}
            id="repeatPassword"
            placeholder="Enter repeat password"
            name="repeatPassword"
            value={repeatPassword}
            onChange={onChangeField}
          />
          {errors.repeatPassword && (
            <div className="invalid-feedback">{errors.repeatPassword}</div>
          )}
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
