import React, { Component } from "react";
import classNames from "classnames";
import countries from "../../date/countries";
import cities from "../../date/cities";

class Contacts extends Component {
  getClassNameField = name => {
    return classNames("form-control", {
      invalid: this.props.errors[name]
    });
  };

  getCitiesList = country => {
    const citiesList = [];
    for (let key in cities) {
      if (cities[key].country === Number(country)) {
        citiesList.push({
          id: key,
          name: cities[key].name
        });
      }
    }

    return citiesList;
  };

  // good example for async setState
  onChangeCountry = event => {
    this.props.onChangeField({
      target: {
        name: "city",
        value: ""
      }
    });
    this.props.onChangeField({
      target: {
        name: "country",
        value: event.target.value
      }
    });
  };
  render() {
    const {
      values: { email, mobile, country, city },
      errors,
      onChangeField
    } = this.props;

    const citiesList = this.getCitiesList(country);
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className={this.getClassNameField("email")}
            id="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={onChangeField}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="tel"
            className={this.getClassNameField("mobile")}
            id="mobile"
            placeholder="Enter mobile"
            name="mobile"
            value={mobile}
            onChange={onChangeField}
          />
          {errors.mobile && (
            <div className="invalid-feedback">{errors.mobile}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            className="form-control"
            id="country"
            name="country"
            value={country}
            onChange={onChangeField}
          >
            {countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className={this.getClassNameField("city")}
            id="city"
            name="city"
            value={city}
            onChange={onChangeField}
          >
            <option value="">Select city</option>
            {citiesList.map(city => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
        </div>
      </React.Fragment>
    );
  }
}

export default Contacts;
