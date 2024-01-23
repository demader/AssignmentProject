import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    stateProp: {
      options: ["active", "rest", "pressed", "focus", "loading", "hover", "disabled"],
      control: { type: "select" },
    },
    variant: {
      options: ["plain", "primary", "tertiary", "default"],
      control: { type: "select" },
    },
    tone: {
      options: ["critical", "success", "default"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "micro", "medium-default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    labelContent: "Label",
    disclosure: false,
    icon: false,
    stateProp: "active",
    variant: "plain",
    tone: "critical",
    size: "large",
    className: {},
    divClassName: {},
    buttonShineVariantPrimaryToneClassName: {},
  },
};
