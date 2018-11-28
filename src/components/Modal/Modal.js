import React from "react";
import Transition from "react-transition-group/Transition";

import classes from "./Modal.module.scss";

const animationTiming = {
  enter: 400,
  exit: 1000
}

const modal = props => {
  return (
    <Transition mountOnEnter unmountOnExit in={props.show} timeout={animationTiming}>
      {state => {
        let cssClasses = [classes.Modal];
        state === "entering"
          ? cssClasses.push(classes.ModalOpen)
          : state === "exiting" && cssClasses.push(classes.ModalClosed);

        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
