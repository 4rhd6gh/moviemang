import React from "react";
import Tooltip from "@component/Tooltip";

export default {
  title: "Tooltip", //components 폴더 아래 폴더명을 시작으로 jsx 파일명까지를 title로 표시
  component: Tooltip,
  argTypes: {
    tooltipText: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "마우스 오버 이벤트로 해당 기능의 설명을 띄울 수 있는 tooltip 컴포넌트입니다.",
      },
    },
  },
};
const Template = (args) => (
  <div>
    <Tooltip {...args}>
      <button>tooltip</button>
    </Tooltip>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  tooltipText: "facebook으로 연결하는 링크입니다.",
};
