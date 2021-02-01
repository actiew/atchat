import React from "react";

import { MoreList } from "./MoreList";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/MoreList",
   component: MoreList,
};

export const Default = args => <MoreList {...args}/>;
