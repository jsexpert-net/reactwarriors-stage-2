import React, { Component } from "react";
import avatarDefault from "../../images/default-avatar.png";
import classNames from "classnames";

class Avatar extends Component {
  handleChange = event => {
    const reader = new FileReader();

    reader.onload = event => {
      this.props.onChangeField({
        target: {
          name: "avatar",
          value: event.target.result
        }
      });
    };

    reader.readAsDataURL(event.target.files[0]);
  };
  render() {
    const {
      values: { avatar },
      errors
    } = this.props;
    return (
      <React.Fragment>
        <img
          className="mb-4"
          width="100%"
          src={avatar || avatarDefault}
          alt=""
        />
        <div className="mb-4">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={this.handleChange}
            />
            <label
              className={classNames("custom-file-label", {
                invalid: errors.avatar
              })}
              htmlFor="customFile"
            >
              Choose avatar
            </label>
          </div>
          {errors.avatar && (
            <div className="invalid-feedback">{errors.avatar}</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Avatar;
