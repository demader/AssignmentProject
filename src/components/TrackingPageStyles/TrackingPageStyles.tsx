

import PropTypes from "prop-types";
import React from "react";
import { ButtonGroup } from "../ButtonGroup";
import { TextField } from "../TextField";
import "./style.css";

interface Props {
  className: any;
  textFieldInputTextValueContent: string;
  rectangleClassName: any;
  textFieldInputTextValueContent1: string;
  rectangleClassNameOverride: any;
  textFieldInputTextValueContent2: string;
  divClassName: any;
}

export const TrackingPageStyles = ({
  className,
  textFieldInputTextValueContent = "Value",
  rectangleClassName,
  textFieldInputTextValueContent1 = "Value",
  rectangleClassNameOverride,
  textFieldInputTextValueContent2 = "Value",
  divClassName,
}: Props): JSX.Element => {
  return (
    <div className={`tracking-page-styles ${className}`}>
      <div className="div-5">
        <div className="heading-5">
          <div className="heading-6">
            <p className="text-wrapper-14">Elevate Your Brand Aesthetics with Custom Tracking Page Styles</p>
            <p className="text-wrapper-15">
              Immerse your customers in a branded experience by personalizing the colors on your tracking page.
            </p>
          </div>
        </div>
        <div className="div-5">
          <div className="div-6">
            <TextField
              borderless={false}
              className="text-field-instance"
              inputTextValueContent={textFieldInputTextValueContent}
              labelContent="Accent Color"
              size="default"
              stateProp="rest"
              tone="default"
            />
            <div className={`rectangle-2 ${rectangleClassName}`} />
          </div>
          <div className="div-6">
            <TextField
              borderless={false}
              className="text-field-instance"
              inputTextValueContent={textFieldInputTextValueContent1}
              labelContent="Text Color"
              size="default"
              stateProp="rest"
              tone="default"
            />
            <div className={`rectangle-2 ${rectangleClassNameOverride}`} />
          </div>
          <div className="div-6">
            <TextField
              borderless={false}
              className="text-field-instance"
              inputTextValueContent={textFieldInputTextValueContent2}
              labelContent="Background Color"
              size="default"
              stateProp="rest"
              tone="default"
            />
            <div className={`rectangle-2 ${divClassName}`} />
          </div>
        </div>
      </div>
      <ButtonGroup
        buttonButtonShineVariantPrimaryToneClassName="button-group-8"
        buttonLabelContent="Preview"
        buttonLabelContent1="Apply Colors"
        buttonVariant="primary"
        className="button-group-7"
        gap="tight"
      />
    </div>
  );
};

TrackingPageStyles.propTypes = {
  textFieldInputTextValueContent: PropTypes.string,
  textFieldInputTextValueContent1: PropTypes.string,
  textFieldInputTextValueContent2: PropTypes.string,
};
