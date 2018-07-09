import React, { Component } from "react";
import Steps from "./Steps";
import NavigationBottom from "./NavigationBottom";
import Basic from "./steps/Basic";
import Contacts from "./steps/Contacts";
import Avatar from "./steps/Avatar";
import Finish from "./steps/Finish";
import validate from "./validate";

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
          name: "Avatar",
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
        country: "1",
        city: "",
        avatar: ""
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
        avatar: false
      }
    };
  }

  onChangeField = event => {
    const newValues = {
      ...this.state.values,
      [event.target.name]: event.target.value
    };

    const newErrors = {
      ...this.state.errors,
      [event.target.name]: false
    };

    if (event.target.name === "country") {
      newValues.city = "";
      newErrors.city = false;
    }

    this.setState(prevState => ({
      ...prevState,
      values: newValues,
      errors: newErrors
    }));
  };
  goNextStep = () => {
    const errors = validate(this.state.values, this.state.activeStep);

    if (Object.keys(errors).length === 0) {
      const newSteps = [...this.state.steps];
      const newActiveStes = this.state.activeStep + 1;
      newSteps[this.state.activeStep].isActive = false;
      newSteps[newActiveStes].isActive = true;
      newSteps[this.state.activeStep].isCompleted = true;
      this.setState({
        activeStep: newActiveStes,
        steps: newSteps
      });
    } else {
      this.setState({
        errors
      });
    }
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
    const { steps, activeStep, values, errors } = this.state;
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Steps steps={steps} activeStep={activeStep} />
          {steps[0].isActive && (
            <Basic
              values={values}
              onChangeField={this.onChangeField}
              errors={errors}
            />
          )}
          {steps[1].isActive && (
            <Contacts
              values={values}
              onChangeField={this.onChangeField}
              errors={errors}
            />
          )}
          {steps[2].isActive && (
            <Avatar
              values={values}
              onChangeField={this.onChangeField}
              errors={errors}
            />
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
