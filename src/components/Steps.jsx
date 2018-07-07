import React, { Component } from "react";
import classNames from "classnames";

class Steps extends Component {
  handleClick = step => e => {
    e.preventDefault();

    this.props.changeStep(step);
  };

  getStepClassName = step => {
    return classNames("step", {
      "is-active": this.props.steps[step].isActive,
      "is-completed": this.props.steps[step].isCompleted
    });
  };
  render() {
    const { steps } = this.props;
    return (
      <div className="steps mb-4">
        {steps.map((step, index) => (
          <div key={step.name} className={this.getStepClassName(index)}>
            <div className="step__marker">{index + 1}</div>
            <div className="step__title mt-1">{step.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Steps;
