import React from "react";

import { NoteCard } from "./NoteCard";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/NoteCard",
   component: NoteCard,
};

export const Default = (args) => <NoteCard {...args}/>;