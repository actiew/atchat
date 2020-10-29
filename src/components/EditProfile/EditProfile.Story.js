import React from "react";

import { EditProfile } from "./EditProfile";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/EditProfile",
   component: EditProfile,
};

export const Default = (args) => <EditProfile {...args}/>;