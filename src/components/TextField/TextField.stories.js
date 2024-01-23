import { TextField } from ".";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    stateProp: {
      options: ["active", "rest", "focus", "read-only", "hover", "error", "disabled"],
      control: { type: "select" },
    },
    tone: {
      options: ["magic", "default"],
      control: { type: "select" },
    },
    size: {
      options: ["slim", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    actionContent: "Action",
    clearButton: false,
    prefix: false,
    suffix: false,
    helpText: false,
    helpContent: "Help text",
    labelContent: "Label",
    labelAction: false,
    label: true,
    stateProp: "active",
    tone: "magic",
    borderless: true,
    size: "slim",
    className: {},
    inputTextValueContent: "Value",
  },
};
