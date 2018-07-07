import React, { Component } from "react";
import Steps from "./Steps";
import NavigationBottom from "./NavigationBottom";
import Basic from "./steps/Basic";
import Contacts from "./steps/Contacts";
import Photo from "./steps/Photo";
import Finish from "./steps/Finish";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeStep: 0,
      steps: [
        {
          name: "Basic",
          isActive: true,
          isCompleted: false
        },
        {
          name: "Contacts",
          isActive: false,
          isCompleted: false
        },
        {
          name: "Photo",
          isActive: false,
          isCompleted: false
        },
        {
          name: "Finish",
          isActive: false,
          isCompleted: false
        }
      ],
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "male",
        mobile: "",
        email: "",
        country: 1,
        city: 1,
        photo: ""
      },
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        gender: false,
        mobile: false,
        email: false,
        country: false,
        city: false,
        photo: false
      }
    };
  }

  onChangeField = event => {
    const newValues = {
      ...this.state.values,
      [event.target.name]: event.target.value
    };
    this.setState(prevState => ({
      ...prevState,
      values: newValues
    }));
  };
  goNextStep = () => {
    const newSteps = [...this.state.steps];
    const newActiveStes = this.state.activeStep + 1;
    newSteps[this.state.activeStep].isActive = false;
    newSteps[newActiveStes].isActive = true;
    // if validate
    newSteps[this.state.activeStep].isCompleted = true;
    this.setState({
      activeStep: newActiveStes,
      steps: newSteps
    });
  };

  goPrevStep = () => {
    const newSteps = [...this.state.steps];
    const newActiveStes = this.state.activeStep - 1;
    newSteps[this.state.activeStep].isActive = false;
    newSteps[newActiveStes].isActive = true;
    this.setState({
      activeStep: newActiveStes,
      steps: newSteps
    });
  };

  render() {
    const { steps, activeStep, values } = this.state;
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Steps steps={steps} activeStep={activeStep} />
          {steps[0].isActive && (
            <Basic values={values} onChangeField={this.onChangeField} />
          )}
          {steps[1].isActive && (
            <Contacts values={values} onChangeField={this.onChangeField} />
          )}
          {steps[2].isActive && (
            <Photo values={values} onChangeField={this.onChangeField} />
          )}
          {steps[3].isActive && <Finish values={values} />}
          <NavigationBottom
            activeStep={activeStep}
            goNextStep={this.goNextStep}
            goPrevStep={this.goPrevStep}
          />
        </form>
      </div>
    );
  }
}

export default App;
