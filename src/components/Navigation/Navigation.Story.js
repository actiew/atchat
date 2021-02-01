import React from "react";

import { Navigation } from "./Navigation";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Navigation",
   component: Navigation,
};

export const Nav = args => <Navigation {...args}/>;
