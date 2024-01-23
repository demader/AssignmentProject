import { ButtonShine } from ".";

export default {
  title: "Components/ButtonShine",
  component: ButtonShine,
  argTypes: {
    variant: {
      options: ["primary"],
      control: { type: "select" },
    },
    tone: {
      options: ["critical", "success", "default"],
      control: { type: "select" },
    },
    state: {
      options: ["rest", "active", "hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "primary",
    tone: "critical",
    state: "rest",
    className: {},
    shineClassName: {},
  },
};
