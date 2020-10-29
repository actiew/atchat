import React from "react";

import { BlockedList } from "./BlockedList";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/BlockedList",
   component: BlockedList,
};

export const Default = (args) => <BlockedList {...args}/>;