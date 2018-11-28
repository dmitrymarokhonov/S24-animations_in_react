import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import classes from "./Modal.module.scss";

const animationTiming = {
  enter: 400,
  exit: 1000
};

const modal = props => {
  return (
    <CSSTransition mountOnEnter unmountOnExit in={props.show} timeout={animationTiming} classNames={{
      enter: "",
      enterActive: classes.ModalOpen,
      exit: "",
      exitActive: classes.ModalClosed
    }}>
      <div className={classes.Modal}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
