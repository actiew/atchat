import React from "react";
import { ContactCard } from "./ContactCard";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/ContactCard",
   component: ContactCard,
};

export const Default = (args) => <ContactCard {...args}/>;