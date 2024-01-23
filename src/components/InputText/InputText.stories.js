import { InputText } from ".";

export default {
  title: "Components/InputText",
  component: InputText,
  argTypes: {
    type: {
      options: ["value", "placeholder"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    placeholderContent: "Placeholder",
    valueContent: "Value",
    type: "value",
    typeValueClassName: {},
    className: {},
    inputType: "text",
  },
};
