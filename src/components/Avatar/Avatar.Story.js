import React from "react";

import {Avatar} from "./Avatar";

import avatar001 from "resources/images/avatar001.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Avatar",
   component: Avatar,
};

const Template = (args) => <Avatar {...args}/>;

export const Default = Template.bind({});
Default.args = {
   src: avatar001,
};

export const OnLine = Template.bind({});
OnLine.args = {
   src: avatar001,
   status: "online",
};

export const OffLine = Template.bind({});
OffLine.args = {
   src: avatar001,
   status: "offline",
};