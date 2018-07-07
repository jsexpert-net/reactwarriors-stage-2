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
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            placeholder="Enter mobile"
            name="mobile"
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select className="form-control" id="country">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select className="form-control" id="city">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default Contacts;
