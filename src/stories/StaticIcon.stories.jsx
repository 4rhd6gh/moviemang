import React from "react";
import StaticIcon from "@component/Icons/StaticIcon";
import { CgFacebook, CgTwitter, CgGoogle } from "react-icons/cg";

export default {
  title: "Icon/StaticIcon", //components 폴더 아래 폴더명을 시작으로 jsx 파일명까지를 title로 표시
  component: StaticIcon,
  parameters: {
    docs: {
      description: {
        component:
          "react-icons의 아이콘 svg별로 크키와 색, 클릭 이벤트를 변경하며 나타낼 수 있습니다.",
      },
    },
  },
};

export const TwitterSmallIcon = () => {
  return <StaticIcon icon={CgTwitter} size={"small"} color={"text-blue-300"} />;
};

export const FacebookLargeIcon = () => {
  return (
    <StaticIcon icon={CgFacebook} size={"large"} color={"text-purple-300"} />
  );
};

export const GoogleMediumIcon = () => {
  return <StaticIcon icon={CgGoogle} size={"medium"} color={"text-red-300"} />;
};
