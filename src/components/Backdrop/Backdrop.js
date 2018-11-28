import React from "react";

import classes from "./Backdrop.module.scss";

const backdrop = props => {
  let cssClasses = [classes.Backdrop];
  props.show
    ? cssClasses.push(classes.BackdropOpen)
    : cssClasses.push(classes.BackdropClosed);
  return <div className={cssClasses.join(" ")} />;
};

export default backdrop;
