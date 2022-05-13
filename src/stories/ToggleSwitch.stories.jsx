import React from "react";
import ToggleSwitch from "@page/common/toggleSwitch";

export default {
  title: "Common/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {},
};

const Template = (args) => <ToggleSwitch {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
