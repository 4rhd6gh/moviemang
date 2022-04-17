import React from "react";
import StaticIcon from "@component/Icons/StaticIcon";
import { CgTwitter } from "react-icons/cg";
export default function MainPage() {
  return (
    <div>
      <div className="text-blue-500 ">안녕하세요</div>
      <StaticIcon icon={CgTwitter} size={"large"} color={"text-blue-500"} />
    </div>
  );
}
