import React from "react";
import Button from "@component/Buttons/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["contained", "outlined", "disabled"],
    },
    text: { control: "text" },
    type: { control: { type: "radio" }, options: ["submit", "button"] },
    size: { control: { type: "radio" }, options: ["small", "large"] },
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
  focus: true,
};

export const Outlined = Template.bind({});

Outlined.args = {
  variant: "outlined",
  text: "outlined",
  type: "button",
  size: "large",
  focus: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  variant: "disabled",
  text: "disabled",
  type: "button",
  size: "small",
  focus: true,
};
