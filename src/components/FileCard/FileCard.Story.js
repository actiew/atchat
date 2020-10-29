import React from "react";

import { FileCard } from "./FileCard";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/FileCard",
   component: FileCard,
};

export const Default = (args) => <FileCard {...args}/>;