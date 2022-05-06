import React from "react";
import Input from "@component/Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    type: { control: { type: "radio" }, options: ["email", "password"] },
    placeholder: { control: "text" },
  },
};

const Template = (args) => <Input {...args} />;

export const email = Template.bind({});

email.args = {
  type: "email",
  placeholder: "Email",
};

export const password = Template.bind({});

password.args = {
  type: "password",
  placeholder: "Password",
};
