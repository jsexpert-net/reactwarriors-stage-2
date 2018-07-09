import React, { Component } from "react";
import coutries from "../../date/countries.js";
import cities from "../../date/cities.js";

class Finish extends Component {
  render() {
    const {
      values: {
        firstname,
        lastname,
        gender,
        mobile,
        email,
        country,
        city,
        avatar
      }
    } = this.props;

    const countryName = coutries.find(item => item.id === Number(country)).name;
    const cityName = cities[city].name;
    return (
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-4">
            <img width="100%" src={avatar} alt="" />
          </div>
          <div className="col-8 d-flex align-items-center">
            <h4>
              {firstname} {lastname}
            </h4>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Mobile:</strong> {mobile}
            </p>
            <p>
              <strong>Location:</strong> {countryName}, {cityName}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Finish;
