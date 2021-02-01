import React from "react";

import Avatar001 from "src/resources/images/avatar001.png";

import { MessageCard } from "./MessageCard";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/MessageCard",
   component: MessageCard,
};

export const Default = () => (
   <MessageCard
      avatarSrc={Avatar001}
      name="实视"
      avatarStatus="online"
      statusText="在线"
      time="9分钟前"
      message="对付敌人唯一的办法，打败ta!"
      unreadCount={3}
   />
);

export const Active = () => (
   <MessageCard
      avatarSrc={Avatar001}
      name="实视"
      avatarStatus="online"
      time="9分钟前"
      message="对付敌人唯一的办法，打败ta!"
      unreadCount={3}
      active
   />
);
