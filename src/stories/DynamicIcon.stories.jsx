import React from "react";
import DynamicIcon from "@component/Icons/DynamicIcon";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default {
  title: "DynamicIcon",
  component: DynamicIcon,
};

const Template = (args) => <DynamicIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  clickedIcon: FaHeart,
  unClickedIcon: FaRegHeart,
  size: "small",
  color: "text-red-500",
};
