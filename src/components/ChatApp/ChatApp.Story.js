import React from "react";
import { ChatApp } from "./ChatApp";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/ChatApp",
   component: ChatApp,
};

export const Default = args => <ChatApp {...args}/>;
