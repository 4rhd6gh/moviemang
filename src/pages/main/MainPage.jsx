import React from "react";
import StaticIcon from "@component/Icons/StaticIcon";
import Button from "@component/Buttons/Button";
import { CgTwitter } from "react-icons/cg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import DynamicIcon from "../../components/Icons/DynamicIcon";
export default function MainPage() {
  function onClick() {
    alert("onClick!!");
  }
  return (
    <div>
      <div className="text-blue-500 ">안녕하세요</div>
      <StaticIcon icon={CgTwitter} size={"large"} color={"text-blue-500"} />
      <Button
        text="second"
        type="button"
        textColor={"text-indigo-900"}
        backgroundColor={"hover:bg-indigo-100"}
        borderWidth={"border-2"}
        borderColor={"border-indigo-900"}
        borderRadius={"rounded-full"}
        focus={true}
        onClick={onClick}
      />
    </div>
  );
}
