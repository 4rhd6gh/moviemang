import React from "react";
import Button from "@component/Buttons/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    type: { control: { type: "radio" }, options: ["submit", "button"] },
    size: { control: { type: "radio" }, options: ["small", "large"] },
    backgroundColor: {
      control: {
        type: "color",
      },
    },
    textColor: {
      control: {
        type: "color",
      },
    },
    borderWidth: {
      control: { type: "select" },
      options: ["border-0", "border", "border-2"],
    },
    borderColor: {
      control: { type: "color" },
    },
    borderRadius: {
      control: { type: "radio" },
      options: ["rounded-lg", "rounded-full"],
    },
    focus: { control: { type: "boolean" } },
    cursor: {
      control: { type: "radio" },
      options: ["auto", "pointer"],
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "button",
  type: "button",
  size: "small",
  textColor: "text-orange-200",
  backgroundColor: "bg-indigo-400",
  borderWidth: "border-0",
  borderColor: "border-indigo-900",
  borderRadius: "rounded-full",
  focus: true,
  cursor: "pointer",
};
