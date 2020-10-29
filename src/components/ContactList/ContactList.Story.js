import React from "react";
import { ContactList } from "./ContactList";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/ContactList",
   component: ContactList,
};

export const Default = (args) => <ContactList {...args}/>;