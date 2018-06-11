import React, { Component } from "react";

class NavBottom extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-light mr-4">
          Previous
        </button>
        <button type="button" className="btn btn-success">
          Next
        </button>
      </div>
    );
  }
}

export default NavBottom;
