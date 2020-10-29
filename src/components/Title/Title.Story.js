import React from "react";

import { Title } from "./Title";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Title",
   component: Title,
};

export const Default = (args) => <Title {...args}/>;