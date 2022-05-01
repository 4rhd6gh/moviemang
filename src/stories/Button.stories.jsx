import React from "react";
import Button from "@component/Buttons/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["contained", "outlined"],
    },
    text: { control: "text" },
    type: { control: { type: "radio" }, options: ["submit", "button"] },
    width: { control: { type: "select" }, options: [20, 24, 28, 32, 36, 40] },
    height: { control: { type: "select" }, options: [10, 11, 12] },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
    disabled: { control: { type: "boolean" } },
    focus: { control: { type: "boolean" } },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Contained = Template.bind({});

Contained.args = {
  variant: "contained",
  text: "contained",
  type: "button",
  width: 20,
  height: 10,
  disabled: false,
  focus: true,
};

export const Outlined = Template.bind({});

Outlined.args = {
  variant: "outlined",
  text: "outlined",
  type: "button",
  width: 24,
  height: 11,
  disabled: false,
  focus: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  variant: "contained",
  text: "disabled",
  type: "button",
  width: 28,
  height: 12,
  disabled: true,
  focus: true,
};
