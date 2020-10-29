import React from "react";

import { Conversation } from "./Conversation";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Conversation",
   component: Conversation,
};

export const Default = (args) => <Conversation {...args}/>;