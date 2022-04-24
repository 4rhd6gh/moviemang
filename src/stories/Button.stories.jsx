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
    size: { control: { type: "radio" }, options: ["small", "large"] },
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
  size: "small",
  disabled: false,
  focus: true,
};

export const Outlined = Template.bind({});

Outlined.args = {
  variant: "outlined",
  text: "outlined",
  type: "button",
  size: "large",
  disabled: false,
  focus: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  variant: "contained",
  text: "disabled",
  type: "button",
  size: "small",
  disabled: true,
  focus: true,
};
