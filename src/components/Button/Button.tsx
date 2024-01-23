
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Spinner5 } from "../../icons/Spinner5";
import { ButtonShine } from "../ButtonShine";
import "./style.css";

interface Props {
  labelContent: string;
  disclosure: boolean;
  icon: boolean;
  stateProp: "active" | "rest" | "pressed" | "focus" | "loading" | "hover" | "disabled";
  variant: "plain" | "primary" | "tertiary" | "default";
  tone: "critical" | "success" | "default";
  size: "large" | "micro" | "medium-default";
  className: any;
  divClassName: any;
  buttonShineVariantPrimaryToneClassName: any;
}

export const Button = ({
  labelContent = "Label",
  disclosure = false,
  icon = false,
  stateProp,
  variant,
  tone,
  size,
  className,
  divClassName,
  buttonShineVariantPrimaryToneClassName,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "rest",
    variant: variant || "default",
    tone: tone || "default",
    size: size || "medium-default",
  });

  return (
    <button
      className={`button ${state.state} ${state.variant} ${state.size} ${state.tone} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {((state.state === "active" && state.tone === "critical") ||
        (state.state === "active" && state.tone === "default" && state.variant === "plain") ||
        (state.state === "active" && state.tone === "success") ||
        (state.state === "disabled" && state.variant === "plain") ||
        (state.state === "disabled" && state.variant === "primary") ||
        (state.state === "focus" && state.tone === "critical" && state.variant === "default") ||
        (state.state === "focus" && state.tone === "default" && state.variant === "primary") ||
        (state.state === "focus" && state.variant === "plain") ||
        (state.state === "hover" && state.tone === "critical" && state.variant === "default") ||
        (state.state === "hover" && state.variant === "plain") ||
        (state.state === "loading" && state.variant === "primary") ||
        (state.state === "pressed" && state.tone === "critical") ||
        (state.state === "pressed" && state.tone === "default" && state.variant === "plain") ||
        (state.state === "pressed" && state.tone === "success") ||
        (state.state === "rest" && state.tone === "critical" && state.variant === "default") ||
        (state.state === "rest" && state.variant === "plain") ||
        (state.tone === "default" && state.variant === "default") ||
        state.variant === "tertiary") && (
        <div className="label">
          {["active", "disabled", "hover", "pressed", "rest"].includes(state.state) && <>{labelContent}</>}

          {state.state === "focus" && ["default", "plain", "tertiary"].includes(state.variant) && (
            <div className="text-wrapper">{labelContent}</div>
          )}

          {state.variant === "primary" && state.state === "focus" && (
            <>
              <div className="div">{labelContent}</div>
              <ButtonShine
                className={`${state.size === "micro" ? "class" : state.size === "large" ? "class-2" : "class-3"}`}
                state="hover"
                tone="default"
                variant="primary"
              />
            </>
          )}

          {state.state === "loading" && ["medium-default", "micro"].includes(state.size) && (
            <Spinner5 className="spinner" color={state.variant === "primary" ? "white" : "#CCCCCC"} />
          )}
        </div>
      )}

      {((state.state === "active" && state.tone === "default" && state.variant === "primary") ||
        (state.state === "focus" && state.tone === "critical" && state.variant === "primary") ||
        (state.state === "focus" && state.tone === "success") ||
        (state.state === "hover" && state.variant === "primary") ||
        (state.state === "pressed" && state.tone === "default" && state.variant === "primary") ||
        (state.state === "rest" && state.variant === "primary")) && (
        <>
          <div
            className={`label-2 ${
              ["active", "hover", "pressed", "rest"].includes(state.state) ? divClassName : undefined
            }`}
          >
            {["active", "hover", "pressed", "rest"].includes(state.state) && <>{labelContent}</>}

            {state.state === "focus" && <div className="label-3">{labelContent}</div>}
          </div>
          <ButtonShine
            className={`${
              state.state === "focus" && state.size === "medium-default"
                ? "class-3"
                : state.size === "micro" && state.state === "focus"
                ? "class"
                : state.state === "focus" && state.size === "large"
                ? "class-2"
                : buttonShineVariantPrimaryToneClassName
            }`}
            shineClassName={`${
              state.size === "medium-default" && ["critical", "success"].includes(state.tone) && "class-4"
            } ${state.size === "micro" && ["critical", "success"].includes(state.tone) && "class-5"} ${
              state.size === "large" && ["critical", "success"].includes(state.tone) && "class-6"
            }`}
            state={state.state === "rest" ? "rest" : ["active", "pressed"].includes(state.state) ? "active" : "hover"}
            tone={state.tone === "critical" ? "critical" : state.tone === "success" ? "success" : "default"}
            variant="primary"
          />
        </>
      )}
    </button>
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

Button.propTypes = {
  labelContent: PropTypes.string,
  disclosure: PropTypes.bool,
  icon: PropTypes.bool,
  stateProp: PropTypes.oneOf(["active", "rest", "pressed", "focus", "loading", "hover", "disabled"]),
  variant: PropTypes.oneOf(["plain", "primary", "tertiary", "default"]),
  tone: PropTypes.oneOf(["critical", "success", "default"]),
  size: PropTypes.oneOf(["large", "micro", "medium-default"]),
};
