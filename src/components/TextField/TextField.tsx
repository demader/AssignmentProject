
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Alertcircle2 } from "../../icons/Alertcircle2";
import { InputText } from "../InputText";
import "./style.css";

interface Props {
  actionContent: string;
  clearButton: boolean;
  prefix: boolean;
  suffix: boolean;
  helpText: boolean;
  helpContent: string;
  labelContent: string;
  labelAction: boolean;
  label: boolean;
  stateProp: "active" | "rest" | "focus" | "read-only" | "hover" | "error" | "disabled";
  tone: "magic" | "default";
  borderless: boolean;
  size: "slim" | "default";
  className: any;
  inputTextValueContent: string;
}

export const TextField = ({
  actionContent = "Action",
  clearButton = false,
  prefix = false,
  suffix = false,
  helpText = false,
  helpContent = "Help text",
  labelContent = "Label",
  labelAction = false,
  label = true,
  stateProp,
  tone,
  borderless,
  size,
  className,
  inputTextValueContent = "Value",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "rest",
    tone: tone || "default",
    borderless: borderless,

    size: size || "default",
  });

  return (
    <div
      className={`text-field ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {label && (
        <div className="label-wrapper">
          <div className={`label-4 state-3-${state.state}`}>{labelContent}</div>
        </div>
      )}

      <div
        className={`input state-4-${state.state} size-${state.size} borderless-${state.borderless} tone-2-${state.tone}`}
      >
        {["active", "disabled", "error", "hover", "read-only", "rest"].includes(state.state) && (
          <InputText
            className={`${state.state === "disabled" && "class-7"} ${state.state === "read-only" && "class-8"} ${
              state.tone === "magic" && "class-9"
            }`}
            type="value"
            typeValueClassName="input-text-instance"
            valueContent={state.state === "error" ? "Value" : inputTextValueContent}
          />
        )}

        {state.state === "focus" && (
          <>
            <InputText type="value" typeValueClassName="input-text-instance" valueContent="Value" />
            <div className="border-focus" />
          </>
        )}
      </div>
      {state.state === "error" && (
        <div className="inline-error">
          <Alertcircle2 className="alert-circle" />
          <div className="text-wrapper-13">Error message</div>
        </div>
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

TextField.propTypes = {
  actionContent: PropTypes.string,
  clearButton: PropTypes.bool,
  prefix: PropTypes.bool,
  suffix: PropTypes.bool,
  helpText: PropTypes.bool,
  helpContent: PropTypes.string,
  labelContent: PropTypes.string,
  labelAction: PropTypes.bool,
  label: PropTypes.bool,
  stateProp: PropTypes.oneOf(["active", "rest", "focus", "read-only", "hover", "error", "disabled"]),
  tone: PropTypes.oneOf(["magic", "default"]),
  borderless: PropTypes.bool,
  size: PropTypes.oneOf(["slim", "default"]),
  inputTextValueContent: PropTypes.string,
};
