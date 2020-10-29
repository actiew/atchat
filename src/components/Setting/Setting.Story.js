import React from "react";

import { Setting } from "./Setting";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Setting",
   component: Setting,
};

export const Default = (args) => <Setting {...args}/>;