import React, { Component } from "react";

class Address extends Component {
  render() {
    return (
      <React.Fragment>
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
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            name="address"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Address;
