import React from "react";

import { Text } from "./Text";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Text",
   component: Text,
};

export const Normal = (args) => (
   <Text {...args}>默认</Text>
);

export const Danger = (args) => (
   <Text type="danger" {...args}>警告</Text>
);
