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
<<<<<<< HEAD
<<<<<<< HEAD
      <DynamicIcon
        clickedIcon={FaHeart}
        unClickedIcon={FaRegHeart}
        size={"large"}
        color={"text-blue-500"}
        isClicked={true}
=======
=======

>>>>>>> d631536a9e7eb4dd8cbbc688be26478d6a0baae7
      <Button
        text="first"
        type="button"
        color={"text-orange-200 bg-indigo-400 hover:bg-indigo-500 "}
        border={"rounded-lg"}
      />
      <Button
        text="second"
        type="button"
        color={"text-indigo-900 hover:bg-indigo-100"}
        border={"border-2 border-indigo-900 rounded-full"}
        focus={"focus:outline-none focus:ring-1 focus:ring-offset-2"}
        onClick={onClick}
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> d631536a9e7eb4dd8cbbc688be26478d6a0baae7
      />
    </div>
  );
}
