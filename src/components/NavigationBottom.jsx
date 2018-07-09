import React, { Component } from "react";

class NavigationBottom extends Component {
  render() {
    const { goNextStep, goPrevStep, activeStep } = this.props;
    return (
      <div className="d-flex justify-content-center">
        {activeStep !== 3 ? (
          <React.Fragment>
            <button
              type="button"
              className="btn btn-light mr-4"
              onClick={goPrevStep}
              disabled={activeStep === 0}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={goNextStep}
            >
              Next
            </button>
          </React.Fragment>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              window.location.reload();
            }}
          >
            Reset
          </button>
        )}
      </div>
    );
  }
}

export default NavigationBottom;
