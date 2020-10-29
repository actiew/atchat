import { Emoji } from "components/Emoji/Emoji";
import { VoiceMessage } from "components/VoiceMessage/VoiceMessage";
import React from "react";

import { ChatBubble } from "./ChatBubble";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/ChatBubble",
   component: ChatBubble,
};

export const Default = (args) => (
   <ChatBubble time={"昨天 22:36"} {...args}>
   我们已收到你发送的文件。
   </ChatBubble>
);

export const Mine = (args) => (
   <ChatBubble type={"mine"} time={"昨天 22:36"} {...args}>
   我们已收到你发送的文件，现在你已符合条件，可以享受教育商店中的优惠价格。<Emoji label={"smile"}>🤓</Emoji>
   </ChatBubble>
);

export const Voice = (args) => (
   <ChatBubble time={"昨天 22:36"} {...args}>
      <VoiceMessage time={"09:36"}/>
   </ChatBubble>
);

export const VoiceMine = (args) => (
   <ChatBubble type={"mine"} time={"昨天 22:36"} {...args}>
      <VoiceMessage type={"mine"} time={"09:36"}/>
   </ChatBubble>
);