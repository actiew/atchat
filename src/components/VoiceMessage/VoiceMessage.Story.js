import React from "react";

import { VoiceMessage } from "./VoiceMessage";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/VoiceMessage",
   component: VoiceMessage,
};

export const Default = (args) => <VoiceMessage time={"01:36"} {...args}/>;
