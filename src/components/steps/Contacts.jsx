import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter phone"
            name="phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            placeholder="Enter mobile"
            name="mobile"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Contacts;
