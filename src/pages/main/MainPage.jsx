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
        variant="outlined"
        text="first"
        type="button"
        focus={true}
        size={"large"}
        onClick={onClick}
      />
      <Button
        variant="contained"
        text="second"
        type="button"
        focus={true}
        onClick={onClick}
      />
    </div>
  );
}
