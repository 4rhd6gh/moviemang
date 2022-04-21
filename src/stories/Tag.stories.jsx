import React from "react";
import Tag from "@component/Tag/Tag";

export default {
  title: "Tag/Tag", //components 폴더 아래 폴더명을 시작으로 jsx 파일명까지를 title로 표시
  component: Tag,
  argTypes: {
    text: { control: "text" },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
    onClick: { action: "clicked" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "#호러, #액션 등 해쉬태그 형태의 타이포그래피를 텍스트, 사이즈, 클릭이벤트를 변경시키며 나타낼 수 있습니다.",
      },
    },
  },
};
const Template = (args) => <Tag {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "액션",
  size: "large",
};
