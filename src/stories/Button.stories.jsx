import React from "react";
import Button from "@component/Buttons/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: { control: { type: "radio" }, options: ["contained", "outlined"] },
    text: { control: "text" },
    type: { control: { type: "radio" }, options: ["submit", "button"] },
    size: { control: { type: "radio" }, options: ["small", "large"] },
    focus: { control: { type: "boolean" } },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: "contained",
  text: "button",
  type: "button",
  size: "small",
  focus: true,
};

export const Outlined = Template.bind({});

Outlined.args = {
  variant: "outlined",
  text: "button",
  type: "button",
  size: "small",
  focus: true,
};
