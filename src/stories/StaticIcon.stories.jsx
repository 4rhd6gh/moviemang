import React from "react";
import StaticIcon from "@component/Icons/StaticIcon";
import { CgFacebook } from "react-icons/cg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "StaticIcon",
  component: StaticIcon,
};
export const Primary = () => {
  return (
    <StaticIcon icon={CgFacebook} size={"small"} color={"text-blue-300"} />
  );
};
