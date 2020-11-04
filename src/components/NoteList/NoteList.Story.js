import React from "react";

import { NoteList } from "./NoteList";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/MoreList",
   component: NoteList,
};

export const Default = (args) => <NoteList {...args}/>;