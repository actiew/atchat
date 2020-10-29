import React from "react";

import { Profile } from "./Profile";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Profile",
   component: Profile,
};

export const Default = (args) => <Profile status={"online"} {...args}/>;