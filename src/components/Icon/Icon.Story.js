import React from "react";

import {Icon} from "./Icon";

import {ReactComponent as MessageIcon} from "resources/icon/message.svg";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Icon",
   component: Icon,
};

const Template = (args) => <Icon {...args}/>;

export const Message = Template.bind({});
Message.args = {
   icon: MessageIcon,
   size: 86,
};