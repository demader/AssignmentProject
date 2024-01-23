

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  placeholderContent: string;
  valueContent: string;
  type: "value" | "placeholder";
  typeValueClassName: any;
  className: any;
  inputType: string;
}

export const InputText = ({
  placeholderContent = "Placeholder",
  valueContent = "Value",
  type,
  typeValueClassName,
  className,
  inputType = "text",
}: Props): JSX.Element => {
  return (
    <input
      className={`input-text ${type} ${type === "value" ? className : undefined}`}
      placeholder={type === "value" ? valueContent : type === "placeholder" ? placeholderContent : undefined}
      type={inputType}
    />
  );
};

InputText.propTypes = {
  placeholderContent: PropTypes.string,
  valueContent: PropTypes.string,
  type: PropTypes.oneOf(["value", "placeholder"]),
  inputType: PropTypes.string,
};
