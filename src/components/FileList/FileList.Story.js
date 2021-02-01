import React from "react";

import { FileList } from "./FileList";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/FileList",
   component: FileList,
};

export const Default = args => <FileList {...args}/>;
