import { MultilineField } from ".";

export default {
  title: "Components/MultilineField",
  component: MultilineField,
  argTypes: {
    stateProp: {
      options: ["active", "rest", "focus", "read-only", "hover", "error", "disabled"],
      control: { type: "select" },
    },
    tone: {
      options: ["magic", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    actionContent: "Action",
    length: "5/120",
    labelAction: false,
    helpText: false,
    helpContent: "Help text",
    maxLength: false,
    labelContent: "Label",
    label: true,
    stateProp: "active",
    tone: "magic",
    className: {},
    inputClassName: {},
  },
};
