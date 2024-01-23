
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  variant: "primary";
  tone: "critical" | "success" | "default";
  state: "rest" | "active" | "hover";
  className: any;
  shineClassName: any;
}

export const ButtonShine = ({ variant, tone, state, className, shineClassName }: Props): JSX.Element => {
  return (
    <div className={`button-shine state-1-${state} tone-1-${tone} ${className}`}>
      {["critical", "success"].includes(tone) && <div className={`shine ${shineClassName}`} />}
    </div>
  );
};

ButtonShine.propTypes = {
  variant: PropTypes.oneOf(["primary"]),
  tone: PropTypes.oneOf(["critical", "success", "default"]),
  state: PropTypes.oneOf(["rest", "active", "hover"]),
};
