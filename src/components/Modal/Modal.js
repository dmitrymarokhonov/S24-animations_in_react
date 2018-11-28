import React from "react";

import classes from "./Modal.module.scss";

const modal = props => {
  let cssClasses = [classes.Modal];
  // eslint-disable-next-line no-unused-expressions
  props.show === "entering" ? cssClasses.push(classes.ModalOpen) : props.show === "exiting" ? cssClasses.push(classes.ModalClosed) : null;
  return (
    <div className={cssClasses.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
