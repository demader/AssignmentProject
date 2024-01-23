import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./style.css";

interface Props {
  gap: "extra-tight" | "loose" | "tight";
  className: any;
  buttonLabelContent: string;
  buttonButtonShineVariantPrimaryToneClassName: any;
  buttonLabelContent1: string;
  buttonDivClassName: any;
  visible: boolean;
  buttonVariant: "primary" | "plain" | "tertiary" | "default";
}

export const ButtonGroup = ({
  gap,
  className,
  buttonLabelContent = "Label",
  buttonButtonShineVariantPrimaryToneClassName,
  buttonLabelContent1 = "Label",
  buttonDivClassName,
  visible = true,
  buttonVariant = "primary",
}: Props): JSX.Element => {
  return (
    <div className={`button-group ${gap} ${className}`}>
      {visible && (
        <Button
          className="button-instance"
          labelContent={buttonLabelContent}
          size="medium-default"
          stateProp="rest"
          tone="default"
          variant="default"
        />
      )}

      <Button
        buttonShineVariantPrimaryToneClassName={buttonButtonShineVariantPrimaryToneClassName}
        className="button-instance"
        divClassName={buttonDivClassName}
        labelContent={buttonLabelContent1}
        size="medium-default"
        stateProp="rest"
        tone="default"
        variant={buttonVariant}
      />
    </div>
  );
};

ButtonGroup.propTypes = {
  gap: PropTypes.oneOf(["extra-tight", "loose", "tight"]),
  buttonLabelContent: PropTypes.string,
  buttonLabelContent1: PropTypes.string,
  visible: PropTypes.bool,
  buttonVariant: PropTypes.oneOf(["primary", "plain", "tertiary", "default"]),
};