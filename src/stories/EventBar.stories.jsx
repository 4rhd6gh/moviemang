import React from "react";
import EventBar from "@page/main/components/eventBar";

export default {
  title: "Main/EventBar", //components 폴더 아래 폴더명을 시작으로 jsx 파일명까지를 title로 표시
  component: EventBar,
  argTypes: {
    eventName: { control: "text" },
    eventType: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    onClick: { action: "clicked" },
  },
  parameters: {
    docs: {
      description: {
        component: "Main 화면에서 사용되는 이벤트 바에 대한 컴포넌트입니다.",
      },
    },
  },
};
const Template = (args) => <EventBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  eventName: "여름이 오면 가장 먼저 생각나는 오싹한 호러영화를 투표해주세요!",
  eventType: "투표",
};
