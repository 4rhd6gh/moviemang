import React from "react";
import Tmfavicon from "@res/img/tmfavicon.ico";

export default function Footer() {
  return (
    <footer className=" w-full ml-auto mr-auto bg-black text-[#abb7c4] pt-12 pb-4">
      <div className="flex justify-center">
        <div className=" pr-28">
          <div className="text-[30px] font-bold logo text-themePink flex items-center ">
            M
            <span className="mt-2 ml-[2px] text-lg tracking-wider text-white">
              OVIEMAN
              <span className="text-themePink ml-[1px] text-lg">G</span>
            </span>
          </div>
          <div className="mt-6 mb-2">Contact Us : moviemang@gmail.com</div>
          <div className="flex mb-4 ">
            <span>API Data :</span>
            <img
              className="ml-2 mr-2"
              src={Tmfavicon}
              width="20px"
              height={"20px"}
            />
            <span>themoviedb.org</span>
          </div>
        </div>
        <div className="pt-6 pl-28">
          <div className="pb-4 text-white ">Legal</div>
          <div>
            <a className="text-xs" href="#">
              서비스 이용약관
            </a>
          </div>
          <div>
            <a className="text-xs" href="#">
              개인정보 처리약관
            </a>
          </div>
        </div>
        <div className="pt-6 pl-20">
          <div className="pb-4 text-white ">Design</div>
          <div>
            <a className="text-xs" href="#">
              Storybook
            </a>
          </div>
          <div>
            <a className="text-xs" href="#">
              기획 문서
            </a>
          </div>
        </div>
        <div className="pt-6 pl-20">
          <div className="pb-4 text-white ">Development</div>
          <div>
            <a className="text-xs" href="#">
              Frontend Github
            </a>
          </div>
          <div>
            <a className="text-xs" href="#">
              Backend Github
            </a>
          </div>
        </div>
        <div className="pt-6 pl-20">
          <div className="pb-4 text-white ">Technical spec</div>
          <div className="pb-2 text-xs">React</div>
          <div className="pb-2 text-xs">Spring</div>
          <div className="pb-2 text-xs">Amazon Web Service</div>
        </div>
      </div>
      <div className="mt-8 text-center">
        © 2017 MovieMang. All Rights Reserved. Designed by 4공6프.
      </div>
    </footer>
  );
}
