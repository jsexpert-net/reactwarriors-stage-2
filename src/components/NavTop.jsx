import React, { Component } from "react";
import classNames from "classnames";

class NavsTop extends Component {
  handleClick = step => e => {
    e.preventDefault();

    this.props.changeStep(step);
  };

  getClassName = step => {
    return classNames("nav-link", {
      active: step === this.props.activeStep
    });
  };
  render() {
    return (
      <ul className="nav nav-pills nav-fill mb-4">
        <li className="nav-item">
          <a
            className={this.getClassName("basic")}
            href=""
            onClick={this.handleClick("basic")}
          >
            Basic
          </a>
        </li>
        <li className="nav-item">
          <a
            className={this.getClassName("contacts")}
            href=""
            onClick={this.handleClick("contacts")}
          >
            Contacts
          </a>
        </li>
        <li className="nav-item">
          <a
            className={this.getClassName("address")}
            href=""
            onClick={this.handleClick("address")}
          >
            Address
          </a>
        </li>
        <li className="nav-item">
          <a
            className={this.getClassName("photo")}
            href=""
            onClick={this.handleClick("photo")}
          >
            Photo
          </a>
        </li>
      </ul>
    );
  }
}

export default NavsTop;
