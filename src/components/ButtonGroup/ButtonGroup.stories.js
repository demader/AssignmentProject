import { ButtonGroup } from ".";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    gap: {
      options: ["extra-tight", "loose", "tight"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    gap: "extra-tight",
    className: {},
    buttonLabelContent: "Label",
    buttonButtonShineVariantPrimaryToneClassName: {},
    buttonLabelContent1: "Label",
    buttonDivClassName: {},
    visible: true,
    buttonVariant: "primary",
  },
};
