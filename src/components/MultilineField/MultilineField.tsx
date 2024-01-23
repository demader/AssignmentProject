
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Alertcircle2 } from "../../icons/Alertcircle2";
import { InputText } from "../InputText";
import "./style.css";

interface Props {
  actionContent: string;
  length: string;
  labelAction: boolean;
  helpText: boolean;
  helpContent: string;
  maxLength: boolean;
  labelContent: string;
  label: boolean;
  stateProp: "active" | "rest" | "focus" | "read-only" | "hover" | "error" | "disabled";
  tone: "magic" | "default";
  className: any;
  inputClassName: any;
}

export const MultilineField = ({
  actionContent = "Action",
  length = "5/120",
  labelAction = false,
  helpText = false,
  helpContent = "Help text",
  maxLength = false,
  labelContent = "Label",
  label = true,
  stateProp,
  tone,
  className,
  inputClassName,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "rest",
    tone: tone || "default",
  });

  return (
    <div
      className={`multiline-field ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {label && (
        <div className="label-5">
          <div className={`label-6 state-5-${state.state}`}>{labelContent}</div>
        </div>
      )}

      {["active", "disabled", "focus", "hover", "read-only", "rest"].includes(state.state) && (
        <div className={`input-2 state-6-${state.state} tone-3-${state.tone} ${inputClassName}`}>
          <InputText
            className={`${
              state.state === "disabled"
                ? "class-10"
                : state.state === "read-only"
                ? "class-11"
                : state.tone === "magic" && state.state === "hover"
                ? "class-12"
                : "class-13"
            }`}
            type="value"
            typeValueClassName="instance-node"
            valueContent="Value"
          />
          {state.state === "focus" && <div className="border-focus-2" />}
        </div>
      )}

      {state.state === "error" && (
        <>
          <div className="input-text-wrapper">
            <InputText className="input-text-2" type="value" typeValueClassName="instance-node" valueContent="Value" />
          </div>
          <div className="inline-error-2">
            <Alertcircle2 className="alertcircle-2" />
            <div className="text-wrapper-16">Error message</div>
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "rest",
      };
  }

  return state;
}

MultilineField.propTypes = {
  actionContent: PropTypes.string,
  length: PropTypes.string,
  labelAction: PropTypes.bool,
  helpText: PropTypes.bool,
  helpContent: PropTypes.string,
  maxLength: PropTypes.bool,
  labelContent: PropTypes.string,
  label: PropTypes.bool,
  stateProp: PropTypes.oneOf(["active", "rest", "focus", "read-only", "hover", "error", "disabled"]),
  tone: PropTypes.oneOf(["magic", "default"]),
};
