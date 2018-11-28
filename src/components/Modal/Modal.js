import React from "react";

import classes from "./Modal.module.scss";

const modal = props => {
  let cssClasses = [classes.Modal];
  props.show ? cssClasses.push(classes.ModalOpen) : cssClasses.push(classes.ModalClosed);
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
