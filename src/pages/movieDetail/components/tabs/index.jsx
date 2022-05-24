import React from "react";

export default function Tabs() {
  return (
    <ul className="flex p-5">
      <li className="p-2 ">
        <a
          className="border-b-2 border-solid border-[#dcf836] font-bold "
          href="#overview"
        >
          OVERVIEW
        </a>
      </li>
      <li className="p-2 ">
        <a href="#cast">CAST&CREW</a>
      </li>
      <li className="p-2 ">
        <a href="#media">MEDIA</a>
      </li>
      <li className="p-2 ">
        <a href="#review">REVIEWS</a>
      </li>
      <li className="p-2 ">
        <a href="#moviesrelated">RELATED MOVIES</a>
      </li>
    </ul>
  );
}
