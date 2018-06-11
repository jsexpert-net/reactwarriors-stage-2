import React, { Component } from "react";
import NavTop from "./NavTop";
import NavBottom from "./NavBottom";
import Basic from "./steps/Basic";
import Contacts from "./steps/Contacts";
import Address from "./steps/Address";

class App extends Component {
  constructor() {
    super();

    this.state = {
      step: "basic"
    };
  }

  changeStep = step => {
    this.setState({
      step: step
    });
  };

  render() {
    const { step } = this.state;
    return (
      <div className="form-container">
        <form className="form">
          <NavTop changeStep={this.changeStep} activeStep={step} />
          {step === "basic" && <Basic />}
          {step === "contacts" && <Contacts />}
          {step === "address" && <Address />}
          <NavBottom />
        </form>
      </div>
    );
  }
}

export default App;
